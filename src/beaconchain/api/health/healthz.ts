/// <reference path="../../network.ts" />

/**
 * https://beaconcha.in/api/v1/docs/index.html#/Health/get_api_healthz
 *
 * @customfunction
 */
function BC$HEALTHZ(): string {
  return makeRequest_<string>({url: `${BEACONCHAIN_API}/api/healthz`});
}
