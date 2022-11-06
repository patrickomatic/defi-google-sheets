/// <reference path="../common.ts" />

/**
 * @customfunction
 */
function BSTX_MERKLE_PROOF(txid: Hex): SpreadsheetCell {
  return bsRequest_<Hex>({
    apiPath: `tx/${validateHex_(txid)}/merkle-proof`,
  });
}
