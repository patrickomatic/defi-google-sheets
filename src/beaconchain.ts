/// <reference path="./types.d.ts" />
/// <reference path="./network.ts" />
/// <reference path="./validators.ts" />

interface BeaconchainOkResponse<T> {
  status: "OK";
  data: T;
}

interface BeaconchainErrorResponse {
  status: "ERROR: could not retrieve db results";
  data: null;
}

type BeaconchainAPIResponse<T> = BeaconchainOkResponse<T> | BeaconchainErrorResponse;

type SlotOrHash = number | Hex;

// TODO these types are still rough and the docs don't really define them
/* eslint-disable babel/camelcase */
interface BeaconchainBlockResponse {
  attestationscount: number;
  attesterslashingscount: number;
  blockroot: Hex;
  depositscount: number;
  epoch: number;
  eth1data_blockhash: Hex;
  eth1data_depositcount: number;
  eth1data_depositroot: Hex;
  exec_base_fee_per_gas: number | null;
  exec_block_hash: string | null;
  exec_block_number: number | null;
  exec_extra_data: string | null;
  exec_fee_recipient: string | null;
  exec_gas_limit: number | null;
  exec_gas_used: number | null;
  exec_logs_bloom: string | null;
  exec_parent_hash: string | null;
  exec_random: string | null;
  exec_receipts_root: string | null;
  exec_state_root: string | null;
  exec_timestamp: number | null;
  exec_transactions_count: number;
  graffiti: Hex;
  graffiti_text: string;
  parentroot: EthereumAddress;
  proposer: number;
  proposerslashingscount: number;
  randaoreveal: Hex;
  signature: Hex;
  slot: number;
  stateroot: Hex;
  status: "1";
  syncaggregate_bits: number | null;
  syncaggregate_participation: number;
  syncaggregate_signature: string | null;
  voluntaryexitscount: number;
}
/* eslint-enable babel/camelcase */

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

// these are calculated by code
interface BeaconchainDerivedValidatorStats {
  date: Date;
}

type BeaconchainAllValidatorStats = BeaconchainValidatorStats & BeaconchainDerivedValidatorStats;
type BeaconchainValidatorStat = keyof BeaconchainAllValidatorStats;

const ALL_STATS: readonly BeaconchainValidatorStat[] = [
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

const BEACONCHAIN_API = "https://beaconcha.in" as const;
const BEACONCHAIN_API_VERSION = "v1" as const;
const BEACON_CHAIN_EPOCH_DATE = "01/12/2020" as const;

function dateFromEpic_(date: number): Date {
  const statsDate = new Date(BEACON_CHAIN_EPOCH_DATE);
  statsDate.setDate(statsDate.getDate() + date);
  return statsDate;
}

function bcRequest_<T>({apiPath}: { apiPath: string; }): T {
  const url = `${BEACONCHAIN_API}/api/${BEACONCHAIN_API_VERSION}/${apiPath}`;
  const {status, data} = makeRequest_<BeaconchainAPIResponse<T>>({
    url,
    marshallFn: (response) => JSON.parse(response) as BeaconchainOkResponse<T>,
  });

  if (status !== 'OK') {
    Logger.log(`Error making Beaconcha.in API request url=${url} ${JSON.stringify(data)}`);
    throw new Error(`Error calling Beaconcha.in API: status=${status}`);
  }

  Logger.log(`returning ${JSON.stringify(data)}`);

  return data;
}

function pickStats_({
  row,
  stats,
}: {
  row: BeaconchainValidatorStats;
  stats: readonly BeaconchainValidatorStat[];
}): SpreadsheetRow {
  return stats.map((stat) =>
    (stat === 'date' ? dateFromEpic_(row.day) : row[stat]));
}

/**
 * https://beaconcha.in/api/v1/docs/index.html#/Health/get_api_healthz
 *
 * @customfunction
 */
function HEALTHZ(): string {
  return makeRequest_<string>({url: `${BEACONCHAIN_API}/api/healthz`});
}

/**
 * https://beaconcha.in/api/v1/docs/index.html#/Health/get_api_healthz_loadbalancer
 *
 * @customfunction
 */
function HEALTHZ_LOADBALANCER(): string {
  return makeRequest_<string>({url: `${BEACONCHAIN_API}/api/healthz`});
}

// XXX docs
function BLOCK(
  slotOrHash: SlotOrHash | 'latest',
  // fields: [keyof BeaconchainBlockResponse][] = [
  fields: string[] = [
    'attestationscount',
    'attesterslashingscount',
    'blockroot',
    'depositscount',
    'epoch',
    'eth1data_blockhash',
    'eth1data_depositcount',
    'eth1data_depositroot',
    'exec_base_fee_per_gas',
    'exec_block_hash',
    'exec_block_number',
    'exec_extra_data',
    'exec_fee_recipient',
    'exec_gas_limit',
    'exec_gas_used',
    'exec_logs_bloom',
    'exec_parent_hash',
    'exec_random',
    'exec_receipts_root',
    'exec_state_root',
    'exec_timestamp',
    'exec_transactions_count',
    'graffiti',
    'graffiti_text',
    'parentroot',
    'proposer',
    'proposerslashingscount',
    'randaoreveal',
    'signature',
    'slot',
    'stateroot',
    'status',
    'syncaggregate_bits',
    'syncaggregate_participation',
    'syncaggregate_signature',
    'voluntaryexitscount',
  ],
): BeaconchainBlockResponse {
  // XXX validate slotOrHash
  // XXX make a generic way to pick the fields
  return bcRequest_<BeaconchainBlockResponse>({
    apiPath: `block/${slotOrHash}`,
    // XXX make pickStats_ more reusable
  });
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
function VALIDATOR_STATS(
  validatorIndex: string,
  stats: readonly BeaconchainValidatorStat[] = ALL_STATS,
): SpreadsheetRow[] {
  return bcRequest_<BeaconchainValidatorStats[]>({
    apiPath: `v1/validator/stats/${validatorIndex}`,
  }).map((row) => pickStats_({row, stats}));
}
