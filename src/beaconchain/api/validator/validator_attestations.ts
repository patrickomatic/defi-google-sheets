/// <reference path="../../common.ts" />

interface BeaconchainValidatorAttestations {
  attesterslot: number;
  committeeindex: number;
  epoch: number;
  inclusionslot: number;
  status: number;
  validatorindex: number;
  week: number;
}

/**
 *
 * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator__indexOrPubkey__attestations
 *
 * Get all attestations during the last 10 epochs for up to 100 validators
 *
 * @param {indexOrPubkey} Up to 100 validator indicesOrPubkeys
 * @param {fields} 
 * @param {offset} 
 * @param {limit} 
 *
 * @customfunction
 */
function BC$VALIDATOR_ATTESTATIONS(
  indexOrPubkey: IndexOrPubkey | IndexOrPubkey[],
  fields: FieldsOrAll<BeaconchainValidatorAttestations> = '*',
  offset?: number,
  limit?: number,
): SpreadsheetRow[] {
  // XXX validate indexOrPubkey
  // XXX indexOrPubkey can also be an array (join it together)
  return pickFields_<BeaconchainValidatorAttestations>({
    rows: bcRequest_<BeaconchainValidatorAttestations[]>({
      apiPath: `v1/validator/${indexOrPubkey}/attestations`,
      offset,
      limit,
    }),
    fields,
  });
}
