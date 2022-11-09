/// <reference path="../types.d.ts" />
/// <reference path="../withRateLimit.ts" />
/// <reference path="../validators.ts" />
/// <reference path="./types.ts" />

const BEACONCHAIN_API = "https://beaconcha.in" as const;
const BEACONCHAIN_API_VERSION = "v1" as const;
const BEACON_CHAIN_EPOCH_DATE = "01/12/2020" as const;
const BEACONCHAIN_REQUESTS_PER_SECOND = 10;

function bcRequest_<T>({
  apiPath,
  offset = 0,
  limit,
}: {
  apiPath: string;
  offset?: number;
  limit?: number;
}): T {
  return withRateLimit_<T>({
    apiNamespace: 'bc',
    requestsPerSecond: BEACONCHAIN_REQUESTS_PER_SECOND,
    fn: () => {
      const {status, data} = makeRequest_<BeaconchainAPIResponse<T>>({
        url: `${BEACONCHAIN_API}/api/${BEACONCHAIN_API_VERSION}/${apiPath}`,
        marshallFn: (response) => JSON.parse(response) as BeaconchainOkResponse<T>,
      });

      if (status !== 'OK') {
        throw new Error(`Error calling Beaconcha.in API: status=${status}`);
      }

      // XXX make a generic pagination function
      /*
      return limit != null && Array.isArray(data) 
        ? data.slice(offset, limit)
        : data;
        */
      return data;
    },
  });
}
