/// <reference path="./types.d.ts" />
/// <reference path="./network.ts" />

const BEACONCHAIN_API_URL = 'https://beaconcha.in/api' as const;
const BEACON_CHAIN_EPOCH_DATE = "01/12/2020" as const;

const ALL_STATS: readonly ValidatorStat[] = [
  'attester_slashings',
  'day',
  'date',
  'deposits',
  'deposits_amount',
  'end_balance',
  'end_effective_balance',
  'max_balance',
  'max_effective_balance',
  'min_balance',
  'min_effective_balance',
  'missed_attestations',
  'missed_blocks',
  'missed_sync',
  'orphaned_attestations',
  'orphaned_blocks',
  'orphaned_sync',
  'participated_sync',
  'proposed_blocks',
  'proposer_slashings',
  'start_balance',
  'start_effective_balance',
  'validatorindex',
] as const;

function dateFromEpic_(date: number): Date {
  const statsDate = new Date(BEACON_CHAIN_EPOCH_DATE);
  statsDate.setDate(statsDate.getDate() + date);
  return statsDate;
}

function pickStats_(row: ValidatorStats, stats: readonly ValidatorStat[]): SpreadsheetRow {
  return stats.map((stat) =>
    (stat === 'date' ? dateFromEpic_(row.day) : row[stat]));
}

/**
 *
 * Hits the beaconcha.in API and gets daily performance for an ethereum validator
 *
 * References:
 * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator_stats__index_
 *
 * @param {validatorIndex} The index or address of the validator
 * @param {stats} An optional array of stats to return.  If not supplied, all stats will be returned.  Possible values include "attester_slashings" | "day" | "deposits" | "deposits_amount" | "end_balance" | "end_effective_balance" | "max_balance" | "max_effective_balance" | "min_balance" | "min_effective_balance" | "missed_attestations" | "missed_blocks" | "missed_sync" | "orphaned_attestations" | "orphaned_blocks" | "orphaned_sync" | "participated_sync" | "proposed_blocks" | "proposer_slashings" | "start_balance" | "start_effective_balance" | "validatorindex"
 *
 * @return Rows inserted containing daily balance data
 *
 * @customfunction
 */
// eslint-disable-next-line no-unused-vars
function VALIDATOR_STATS(
  validatorIndex: string,
  stats: readonly ValidatorStat[] = ALL_STATS,
): SpreadsheetRow[] {
  const {status, data} = makeRequest_(`${BEACONCHAIN_API_URL}/v1/validator/stats/${validatorIndex}`);
  if (status !== 'OK') {
    Logger.log(`Error making Beaconcha.in API request: ${JSON.stringify(data)}`);
    return [];
  }

  return data.map((row) => pickStats_(row, stats));
}
