/// <reference path="../../network.ts" />
/// <reference path="../common.ts" />

// these are calculated by code
interface BeaconchainDerivedValidatorStats {
  date: Date;
}

/* eslint-disable babel/camelcase */
interface BeaconchainValidatorStats {
  attester_slashings: number;
  day: number;
  deposits: number;
  deposits_amount: number;
  end_balance: number;
  end_effective_balance: number;
  max_balance: number;
  max_effective_balance: number;
  min_balance: number;
  min_effective_balance: number;
  missed_attestations: number;
  missed_blocks: number;
  missed_sync: number;
  orphaned_attestations: number;
  orphaned_blocks: number;
  orphaned_sync: number;
  participated_sync: number;
  proposed_blocks: number;
  proposer_slashings: number;
  start_balance: number;
  start_effective_balance: number;
  validatorindex: number;
}
/* eslint-enable babel/camelcase */

type BeaconchainAllValidatorStats = BeaconchainValidatorStats & BeaconchainDerivedValidatorStats;
type BeaconchainValidatorStat = keyof BeaconchainAllValidatorStats;

// XXX this doesn't work (it calculates the date wrong)
function dateFromEpic_(date: number): Date {
  const statsDate = new Date(BEACON_CHAIN_EPOCH_DATE);
  statsDate.setDate(statsDate.getDate() + date);
  return statsDate;
}

/**
 * Proxies: * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator_stats__index_
 *
 * @param {validatorIndex} The index or address of the validator
 * @param {stats} An optional array of stats to return.  If not supplied, all stats will be returned.  Possible values include "attester_slashings" | "day" | "deposits" | "deposits_amount" | "end_balance" | "end_effective_balance" | "max_balance" | "max_effective_balance" | "min_balance" | "min_effective_balance" | "missed_attestations" | "missed_blocks" | "missed_sync" | "orphaned_attestations" | "orphaned_blocks" | "orphaned_sync" | "participated_sync" | "proposed_blocks" | "proposer_slashings" | "start_balance" | "start_effective_balance" | "validatorindex"
 *
 * @return Rows inserted containing daily balance data
 *
 * @customfunction
 */
function BC$VALIDATOR_STATS(
  validatorIndex: string,
  fields: FieldsOrAll<BeaconchainAllValidatorStats> = '*',
  offset?: number,
  limit?: number,
): SpreadsheetRow[] {
  return bcRequest_<BeaconchainValidatorStats[]>({
    apiPath: `v1/validator/stats/${validatorIndex}`,
    offset,
    limit,
  }).map((row) => 
    pickFields_<BeaconchainValidatorStats, BeaconchainDerivedValidatorStats>({
      row,
      fields,
      virtualFields: {
        date: (row) => dateFromEpic_(row.day),
      },
    }),
  );
}
