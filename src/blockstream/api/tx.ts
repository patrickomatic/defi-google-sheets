/// <reference path="../common.ts" />

/**
 * @customfunction
 */
function BS$TX(
  txid: Hex,
  fields: FieldsOrAll<BlockstreamTx> = '*',
)  {
  return pickFields_({
    row: bsRequest_<BlockstreamTx>({ apiPath: `tx/${validateHex_(txid)}` }),
    fields,
  });
}
