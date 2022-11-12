/// <reference path="../../common.ts" />

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
  status: string;
  syncaggregate_bits: number | null;
  syncaggregate_participation: number;
  syncaggregate_signature: string | null;
  voluntaryexitscount: number;
}
/* eslint-enable babel/camelcase */

/**
 * @customfunction
 */
// XXX docs
function BC$BLOCK(
  slotOrHash: SlotOrHash | 'latest',
  fields: FieldsOrAll<BeaconchainBlockResponse> = '*',
): SpreadsheetRow[] {
  // XXX validate slotOrHash
  return [pickFields_({
    row: bcRequest_<BeaconchainBlockResponse>({ apiPath: `block/${slotOrHash}` }),
    fields,
  })];
}
