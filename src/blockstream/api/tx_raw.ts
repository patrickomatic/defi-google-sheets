/// <reference path="../common.ts" />

/**
 * @customfunction
 */
// XXX this can return in binary or hex (but how does that work?)
function BS$TX_RAW(txid: Hex): SpreadsheetCell {
  return bsRequest_<string>({ apiPath: `tx/${validateHex_(txid)}/raw` });
}
