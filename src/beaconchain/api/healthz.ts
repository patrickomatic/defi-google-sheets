/// <reference path="../../network.ts" />

/**
 * https://beaconcha.in/api/v1/docs/index.html#/Health/get_api_healthz
 *
 * @customfunction
 */
function HEALTHZ(): string {
  return makeRequest_<string>({url: `${BEACONCHAIN_API}/api/healthz`});
}


