import * as t from './types';

const API_URL = 'https://beaconcha.in/api' as const;
const BEACON_CHAIN_EPOCH_DATE = "01/12/2020" as const;

const ALL_STATS: readonly t.ValidatorStat[] = [
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

function makeRequest(url: string): t.BeaconchainAPIResponse {
  return JSON.parse(UrlFetchApp.fetch(`${API_URL}/${url}`).getContentText());
}

function dateFromEpic(date: number): Date {
  const statsDate = new Date(BEACON_CHAIN_EPOCH_DATE);
  statsDate.setDate(statsDate.getDate() + date);
  return statsDate;
}

function pickStats(row: t.ValidatorStats, stats: readonly t.ValidatorStat[]): t.SpreadsheetRow {
  return stats.map((stat) =>
    (stat === 'date' ? dateFromEpic(row.day) : row[stat]));
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
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function ETH_VALIDATOR_DAILY_PERFORMANCE(
  validatorIndex: string,
  stats: readonly t.ValidatorStat[] = ALL_STATS,
): t.SpreadsheetRow[] {
  const {status, data} = makeRequest(`v1/validator/stats/${validatorIndex}`);
  if (status !== 'OK') {
    Logger.log(`Error making Beaconcha.in API request: ${JSON.stringify(data)}`);
    return [];
  }

  return data.map((row) => pickStats(row, stats));
}
