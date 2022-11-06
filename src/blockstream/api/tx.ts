/// <reference path="../common.ts" />

/**
 * @customfunction
 */
function BSTX(
  txid: Hex,
  fields: FieldsOrAll<BlockstreamTx> = '*',
): SpreadsheetRow {
  return pickFields_({
    row: bsRequest_<BlockstreamTx>({ apiPath: `tx/${validateHex_(txid)}` }),
    fields,
  });
}
