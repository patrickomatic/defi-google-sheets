/// <reference path="../../common.ts" />

interface BeaconchainValidatorLeaderboard {
  balance: Gwei;  
  performance1d: Gwei;  
  performance31d: Gwei;  
  performance365d: Gwei;  
  performance7d: Gwei;  
  rank7d: number;  
  validatorIndex: number;  
}

/**
 *
 * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator_leaderboard
 * 
 * Get the current top 100 performing validators (using the income over the last 7 days)
 *
 * @param {fields} 
 * @param {offset} 
 * @param {limit} 
 *
 * @customfunction
 */
function BC$VALIDATOR_LEADERBOARD(
  fields: FieldsOrAll<BeaconchainValidatorLeaderboard> = '*',
  offset?: number,
  limit?: number,
): SpreadsheetRow[] {
  return pickFields_<BeaconchainValidatorLeaderboard>({
    rows: bcRequest_<BeaconchainValidatorLeaderboard[]>({
      apiPath: `v1/validator/leaderboard`,
      offset,
      limit,
    }),
    fields,
  });
}
