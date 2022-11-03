/// <reference path="../common.ts" />
/// <reference path="../../types.d.ts" />
/// <reference path="../../validators.ts" />

/* eslint-disable babel/camelcase */
interface BeaconchainBlockAttestationsResponse {
  aggregationbits: Hex;
  beaconblockroot: Hex;
  block_index: number;
  block_root: null | Hex;
  block_slot: number;
  committeeindex: number;
  signature: Hex;
  slot: number;
  source_epoch: number;
  source_root: Hex;
  target_epoch: number;
  target_root: Hex;
  validators: number[];
}
/* eslint-enable babel/camelcase */

function BLOCK_ATTESTATIONS(
  slot: number,
  // XXX
  // fields: (keyof BeaconchainBlockAttestationsResponse)[] = [
  fields: string[] | AllFields = [
    "aggregationbits",
    "beaconblockroot",
    "block_index",
    "block_root",
    "block_slot",
    "committeeindex",
    "signature",
    "slot",
    "source_epoch",
    "source_root",
    "target_epoch",
    "target_root",
    "validators",
  ],
  limit?: number,
): SpreadsheetRow[] {
  // XXX implement limit
  return bcRequest_<BeaconchainBlockAttestationsResponse[]>({
    apiPath: `block/${slot}/attestations`,
    limit,
    // @ts-expect-error
  }).map((row) => pickFields_({ row, fields }));
}
