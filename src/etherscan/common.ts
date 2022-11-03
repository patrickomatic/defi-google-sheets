/// <reference path="../network.ts" />
/// <reference path="../properties.ts" />
/// <reference path="./types.ts" />

// TODO create an optional property that can reference test APIs:
// https://docs.etherscan.io/getting-started/endpoint-urls
const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
const ETHERSCAN_API_KEY_PROPERTY = 'DEFI_ETHERSCAN_API_KEY';

function esRequest_({
  action,
  caller,
  module,
  params,
}: { 
  action: string;
  caller: string;
  module: string; 
  params: any,
}) {
  return makeRequest_({
    url: ETHERSCAN_API_URL,
    params: {
      action,
      module,
      apikey: getProperty_({ caller, key: ETHERSCAN_API_KEY_PROPERTY }),
      ...params,
    },
  });
}


