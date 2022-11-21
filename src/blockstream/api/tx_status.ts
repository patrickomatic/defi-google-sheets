/// <reference path="../common.ts" />

/**
 * @customfunction
 */
function BS$TX_STATUS(
  txid: Hex,
  fields: FieldsOrAll<BlockstreamTxStatus> = '*',
) {
  return pickFields_({
    row: bsRequest_<BlockstreamTxStatus>({
      apiPath: `tx/${validateHex_(txid)}/status`,
    }),
    fields,
  });
}
