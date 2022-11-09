/// <reference path="../common.ts" />
/// <reference path="../../types.d.ts" />
/// <reference path="../../validators.ts" />

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

function BC$BLOCK_ATTESTATIONS(
  slot: number,
  fields: FieldsOrAll<BeaconchainBlockAttestationsResponse> = '*',
  limit?: number,
): SpreadsheetRow[] {
  return pickFields_({
    rows: bcRequest_<BeaconchainBlockAttestationsResponse[]>({
      apiPath: `block/${asNumber_(slot)}/attestations`,
      limit,
    }),
    fields,
  });
}
