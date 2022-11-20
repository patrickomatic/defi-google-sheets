const MAX_LOCK_WAIT_TIME = 10000;
const MAX_RATE_LIMIT_RETRIES = 20;

function withLock_(fn) {
  const lock = LockService.getScriptLock();

  // TODO it would be nice if I could namespace the lock to match the cache key,
  // but GS doesn't support it with their interface
  lock.waitLock(MAX_LOCK_WAIT_TIME);
  const ret = fn();
  lock.releaseLock();
  return ret;
}

function consumeToken_({
  apiNamespace,
  requestsPerSecond,
}: {
  apiNamespace: string;
  requestsPerSecond: number;
}): string | null {
  const cache = CacheService.getScriptCache();

  let availableToken = null;
  return withLock_(() => {
    // there are X tokens available at the moment, so loop through them and see 
    // which we can claim
    const allAvailableTokens = [
      ...Array(requestsPerSecond).keys()
    ].map((slot) => `${apiNamespace}_${slot}`);
    const takenTokens = cache.getAll(allAvailableTokens);

    // loop through all available and find the first that isn't taken
    //availableToken = allAvailableTokens.find((t) => !(t in takenTokens));
    for (const token in allAvailableTokens) {
      if (!(token in takenTokens)) {
        cache.put(token, 1, 1000);
        return token;
      }
    }

    // no tokens available
    return null;
  });
}

function releaseToken_(token: string) {
  const cache = CacheService.getScriptCache();
  withLock_(() => {
    cache.remove(token);
  });
}

function withRateLimit_<T>({
  apiNamespace,
  fn,
  requestsPerSecond,
}: {
  apiNamespace: string;
  fn: () => T;
  requestsPerSecond: number;
}): T {
  for (let i = 1; i < MAX_RATE_LIMIT_RETRIES; i += 1) {
    const token = consumeToken_({ apiNamespace, requestsPerSecond });
    if (token != null) {
      try {
        return fn();
      } finally {
        releaseToken_(token);
      }
    } else {
      // exponential backoff in milliseconds - 200, 400, 800, etc
      Utilities.sleep((i ** 2) * 100);
    }
  }
}
