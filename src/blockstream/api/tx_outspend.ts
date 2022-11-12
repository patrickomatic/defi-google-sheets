/// <reference path="../common.ts" />

/**
 * @customfunction
 */
// XXX this says that it takes:
// Available fields: spent (boolean), txid (optional), vin (optional) and status (optional, the status of the spending tx).
// are those as query params?
function BSTX_OUTSPEND(
  txid: Hex,
  vout: Hex,
  fields: FieldsOrAll<BlockstreamTxVout> = '*',
): SpreadsheetRow {
  return pickFields_({
    row: bsRequest_<BlockstreamTxVout>({
      apiPath: `tx/${validateHex_(txid)}/outspend/${validateHex_(vout)}`,
    }),
    fields,
  });
}