/* eslint-disable babel/camelcase */
export interface ValidatorStats {
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

// these are calculated by code
interface DerivedValidatorStats {
  date: Date;
}

type AllValidatorStats = ValidatorStats & DerivedValidatorStats;
export type ValidatorStat = keyof AllValidatorStats;

export interface BeaconchainOkResponse {
  status: "OK";
  data: ValidatorStats[];
}

export interface BeaconchainErrorResponse {
  status: "ERROR: could not retrieve db results";
  data: null;
}

export type BeaconchainAPIResponse = BeaconchainOkResponse | BeaconchainErrorResponse;

export type SpreadsheetRow = (number | Date)[];
