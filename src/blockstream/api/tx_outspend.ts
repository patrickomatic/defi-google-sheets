/// <reference path="../common.ts" />

/**
 * @customfunction
 */
// XXX this says that it takes:
// Available fields: spent (boolean), txid (optional), vin (optional) and status (optional, the status of the spending tx).
// are those as query params?
function BS$TX_OUTSPEND(
  txid: Hex,
  vout: Hex,
  fields: FieldsOrAll<BlockstreamTxVout> = '*',
) {
  return pickFields_({
    row: bsRequest_<BlockstreamTxVout>({
      apiPath: `tx/${validateHex_(txid)}/outspend/${validateHex_(vout)}`,
    }),
    fields,
  });
}
