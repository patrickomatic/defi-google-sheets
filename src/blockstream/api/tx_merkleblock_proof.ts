/// <reference path="../common.ts" />

/**
 * @customfunction
 */
function BS$TX_MERKLEBLOCK_PROOF(txid: Hex): SpreadsheetCell {
  return bsRequest_<Hex>({
    apiPath: `tx/${validateHex_(txid)}/merkleblock-proof`,
  });
}
