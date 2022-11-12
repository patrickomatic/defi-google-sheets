/// <reference path="../common.ts" />

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-a-single-address
 *
 * @customfunction
 */
function ES$ACCOUNT_BALANCE(
  address: EthereumAddress,
  tag?: EtherscanTag,
): SpreadsheetCell {
  return esRequest_<Wei>({
    caller: 'ES$ACCOUNT_BALANCE',
    action: 'balance',
    module: 'account',
    params: {
      address: validateEthereumAddress_(address),
      tag,
    },
  });
}
