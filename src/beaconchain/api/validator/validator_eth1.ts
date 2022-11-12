/// <reference path="../../common.ts" />

interface BeaconchainValidatorEth1 {
  publickey: Hex;
  valid_signature: boolean;
  validatorindex: number;
}

/**
 * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator_eth1__eth1address_
 *
 * Get all validators that belong to an eth1 address
 *
 * @param {eth1Address} 
 * @param {fields} 
 * @param {offset} 
 * @param {limit} 
 *
 * @customfunction
 */
function BC$VALIDATOR_ETH1(
  eth1address: EthereumAddress,
  fields: FieldsOrAll<BeaconchainValidatorEth1> = '*',
  offset?: number,
  limit?: number,
): SpreadsheetRow[] {
  return pickFields_<BeaconchainValidatorEth1>({
    rows: bcRequest_<BeaconchainValidatorEth1[]>({
      apiPath: `v1/validator/eth1/${eth1address}`,
      offset,
      limit,
    }),
    fields,
  });
}
