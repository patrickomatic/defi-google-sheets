/// <reference path="../common.ts" />

/**
 * @customfunction
 */
function BS$TX_HEX(txid: Hex): SpreadsheetCell {
  return bsRequest_<Hex>({ apiPath: `tx/${validateHex_(txid)}/hex` });
}
