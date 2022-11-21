/// <reference path="../common.ts" />

/**
 * @customfunction
 */
// XXX this says that it takes:
// Available fields: spent (boolean), txid (optional), vin (optional) and status (optional, the status of the spending tx).
// are those as query params?
function BS$TX_OUTSPENDS(
  txid: Hex,
  fields: FieldsOrAll<BlockstreamTxVout> = '*',
): SpreadsheetRow[] {
  return pickFields_({
    rows: bsRequest_<BlockstreamTxVout[]>({
      apiPath: `tx/${validateHex_(txid)}/outspends`,
    }),
    fields,
  });
}
