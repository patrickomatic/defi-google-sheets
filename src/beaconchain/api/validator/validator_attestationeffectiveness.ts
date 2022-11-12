/// <reference path="../../common.ts" />

// TODO: this function seems to be returning the same as as the "attestation efficiency" API endpoint
// I don't see any difference in the data
interface BeaconchainValidatorAttestationeffectiveness {
  validatorindex: number;
  attestation_efficiency: number;
}

/**
 *
 * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator__indexOrPubkey__attestationeffectiveness
 *
 * Get the current attestation-effectiveness of up to 100 validators.  1 = all attestations are included in the next possible block, < 1 some attestations have been included after the next possible block.
 *
 * @param {indexOrPubkey} Up to 100 validator indicesOrPubkeys
 * @param {fields} 
 * @param {offset} 
 * @param {limit} 
 *
 * @customfunction
 */
function BC$VALIDATOR_ATTESTATIONEFFECTIVENESS(
  indexOrPubkey: IndexOrPubkey | IndexOrPubkey[],
  fields: FieldsOrAll<BeaconchainValidatorAttestationeffectiveness> = '*',
  offset?: number,
  limit?: number,
): SpreadsheetRow[] {
  // XXX validate indexOrPubkey
  // XXX indexOrPubkey can also be an array (join it together)
  return pickFields_<BeaconchainValidatorAttestationeffectiveness>({
    rows: bcRequest_<BeaconchainValidatorAttestationeffectiveness[]>({
      apiPath: `v1/validator/${indexOrPubkey}/attestationeffectiveness`,
      offset,
      limit,
    }),
    fields,
  });
}
