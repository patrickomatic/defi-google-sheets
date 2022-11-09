/// <reference path="../network.ts" />
/// <reference path="../properties.ts" />
/// <reference path="./types.ts" />

// TODO create an optional property that can reference test APIs:
// https://docs.etherscan.io/getting-started/endpoint-urls
const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
const ETHERSCAN_API_KEY_PROPERTY = 'DEFI_ETHERSCAN_API_KEY';

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
  params: object,
}): T {
  const apikey = getProperty_({ caller, key: ETHERSCAN_API_KEY_PROPERTY });

  stripUndefined_(params);

  const { message, status, result } = makeRequest_<EtherscanResponse<T>>({
    url: ETHERSCAN_API_URL,
    params: {
      action,
      module,
      apikey,
      ...params,
    },
  });

  if (status === "0") {
    throw new Error(`etherscan.io API request failed: ${message}`);
  }

  return result;
}


