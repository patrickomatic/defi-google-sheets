/// <reference path="../network.ts" />
/// <reference path="../properties.ts" />
/// <reference path="../withRateLimit.ts" />
/// <reference path="./types.ts" />

const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
// TODO document these properties
const ETHERSCAN_API_KEY_PROPERTY = 'DEFI_ETHERSCAN_API_KEY';
const ETHERSCAN_API_URL_PROPERTY = 'DEFI_ETHERSCAN_API_URL';
const ETHERSCAN_REQUESTS_PER_SECOND = 5;

// mutates obj! (for efficiency rather than allocating a new object)
function stripUndefined_(obj: object) {
  Object.keys(obj).forEach((k) => {
    if (obj[k] === undefined) delete obj[k];
  });
}

function esRequest_<T>({
  action,
  caller,
  module,
  params = {},
}: { 
  action: string;
  caller: string;
  module: string; 
  params: object, // TODO can I do a better type?
}): T {
  const apikey = getProperty_({ caller, key: ETHERSCAN_API_KEY_PROPERTY });
  const apiUrl = getProperty_({ 
    caller, 
    key: ETHERSCAN_API_URL_PROPERTY, 
    defaultValue: ETHERSCAN_API_URL,
  });

  stripUndefined_(params);

  return withRateLimit_<T>({
    apiNamespace: 'es', 
    requestsPerSecond: ETHERSCAN_REQUESTS_PER_SECOND,
    fn: () => {
      const { message, status, result } = makeRequest_<EtherscanResponse<T>>({
        url: ETHERSCAN_API_URL,
        params: { action, module, ...params },
      });

      if (status === "0") {
        throw new Error(`etherscan.io API request failed: ${message}`);
      }

      return result;
    },
  });
}
