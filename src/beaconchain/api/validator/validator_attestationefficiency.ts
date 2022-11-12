/// <reference path="../../common.ts" />

interface BeaconchainValidatorAttestationefficiency {
  validatorindex: number;
  attestation_efficiency: number;
}

/**
 *
 * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator__indexOrPubkey__attestationefficiency
 *
 * Get the current performance of up to 100 validators
 *
 * @param {indexOrPubkey} Up to 100 validator indicesOrPubkeys
 * @param {fields} 
 * @param {offset} 
 * @param {limit} 
 *
 * @customfunction
 */
function BC$VALIDATOR_ATTESTATIONEFFICIENCY(
  indexOrPubkey: IndexOrPubkey | IndexOrPubkey[],
  fields: FieldsOrAll<BeaconchainValidatorAttestationefficiency> = '*',
  offset?: number,
  limit?: number,
): SpreadsheetRow[] {
  // XXX validate indexOrPubkey
  // XXX indexOrPubkey can also be an array (join it together)
  return pickFields_<BeaconchainValidatorAttestationefficiency>({
    rows: bcRequest_<BeaconchainValidatorAttestationefficiency[]>({
      apiPath: `v1/validator/${indexOrPubkey}/attestationefficiency`,
      offset,
      limit,
    }),
    fields,
  });
}
