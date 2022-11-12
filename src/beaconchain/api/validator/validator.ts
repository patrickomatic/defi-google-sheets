/// <reference path="../../common.ts" />

interface BeaconchainValidator {
  activationeligibilityepoch: number;
  activationepoch: number;
  balance: Gwei;
  effectivebalance: Gwei;
  exitepoch: number;
  lastattestationslot: number;
  name: null;
  pubkey: Hex;
  slashed: boolean;
  status: string;
  validatorindex: number;
  withdrawableepoch: number;
  withdrawalcredentials: Hex;
}

/**
 *
 * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator__indexOrPubkey_
 * 
 * Get up to 100 validators
 *
 * @param {indexOrPubkey} Up to 100 validator indicesOrPubkeys
 * @param {fields} 
 * @param {offset} 
 * @param {limit} 
 *
 * @customfunction
 */
function BC$VALIDATOR(
  indexOrPubkey: IndexOrPubkey | IndexOrPubkey[],
  fields: FieldsOrAll<BeaconchainValidator> = '*',
  offset?: number,
  limit?: number,
): SpreadsheetRow[] {
  // XXX validate indexOrPubkey
  // XXX indexOrPubkey can also be an array (join it together)
  return pickFields_<BeaconchainValidator>({
    rows: bcRequest_<BeaconchainValidator[]>({
      apiPath: `v1/validator/${indexOrPubkey}`,
      offset,
      limit,
    }),
    fields,
  });
}
