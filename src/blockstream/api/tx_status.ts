/// <reference path="../common.ts" />

/**
 * @customfunction
 */
function BSTX_STATUS(
  txid: Hex,
  fields: FieldsOrAll<BlockstreamTxStatus> = '*',
): SpreadsheetRow {
  return pickFields_({
    row: bsRequest_<BlockstreamTxStatus>({ apiPath: `tx/${validateHex_(txid)}/status` }),
    fields,
  });
}
