/// <reference path="../../common.ts" />

interface BeaconchainValidatorBalancehistory {
  balance: Gwei;
  effectivebalance: Gwei;
  epoch: number;
  validatorindex: number;
  week: number;
}

/**
 *
 * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator__indexOrPubkey__balancehistory
 *
 * XXX
 *
 * @param {indexOrPubkey} Up to 100 validator indicesOrPubkeys
 * @param {fields} 
 * @param {offset} 
 * @param {limit} 
 *
 * @customfunction
 */
function BC$VALIDATOR_BALANCEHISTORY(
  indexOrPubkey: IndexOrPubkey | IndexOrPubkey[],
  fields: FieldsOrAll<BeaconchainValidatorBalancehistory> = '*',
  offset?: number,
  limit?: number,
): SpreadsheetRow[] {
  // XXX validate indexOrPubkey
  // XXX indexOrPubkey can also be an array (join it together)
  return pickFields_<BeaconchainValidatorBalancehistory>({
    rows: bcRequest_<BeaconchainValidatorBalancehistory[]>({
      apiPath: `v1/validator/${indexOrPubkey}/balancehistory`,
      offset,
      limit,
    }),
    fields,
  });
}
