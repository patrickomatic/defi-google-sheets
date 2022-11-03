/// <reference path="../../network.ts" />
/// <reference path="../common.ts" />

/**
 * https://beaconcha.in/api/v1/docs/index.html#/Health/get_api_healthz_loadbalancer
 *
 * @customfunction
 */
function HEALTHZ_LOADBALANCER(): string {
  return makeRequest_<string>({url: `${BEACONCHAIN_API}/api/healthz`});
}


