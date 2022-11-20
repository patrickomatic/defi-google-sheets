/// <reference path="../types.d.ts" />
/// <reference path="../withRateLimit.ts" />
/// <reference path="../validators.ts" />
/// <reference path="../pickFields.ts" />
/// <reference path="./types.ts" />

const BEACONCHAIN_API = "https://beaconcha.in" as const;
const BEACONCHAIN_API_VERSION = "v1" as const;
const BEACON_CHAIN_EPOCH_DATE = "01/12/2020" as const;
const BEACONCHAIN_REQUESTS_PER_SECOND = 10;
const BEACONCHAIN_DEFAULT_RESULT_LIMIT = 100;

function bcRequest_<T>({
  apiPath,
  offset,
  limit,
}: {
  apiPath: string;
  offset?: number;
  limit?: number;
}): T {
  return withRateLimit_<T>({
    apiNamespace: 'bc',
    requestsPerSecond: BEACONCHAIN_REQUESTS_PER_SECOND,
    fn: (): T => {
      const {status, data} = makeRequest_<BeaconchainAPIResponse<T>>({
        url: `${BEACONCHAIN_API}/api/${BEACONCHAIN_API_VERSION}/${apiPath}`,
        marshallFn: (response) => JSON.parse(response) as BeaconchainOkResponse<T>,
      });

      if (status !== 'OK') {
        throw new Error(`Error calling Beaconcha.in API: status=${status}`);
      }

      const results = Array.isArray(data)
        ? data.slice(offset ?? 0, limit ?? BEACONCHAIN_DEFAULT_RESULT_LIMIT)
        : data;

      if (Array.isArray(results) && results.length === 0) {
        // @ts-expect-error TODO fix this so everything knows about empty results
        return [["No results"]];
      }

      // @ts-expect-error
      return results;
    },
  });
}
