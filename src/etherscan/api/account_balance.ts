/// <reference path="../common.ts" />

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-a-single-address
 *
 */
// XXX full docs
function ACCOUNT_BALANCE(
  address: EthereumAddress,
  tag?: EtherscanTag,
) {
  return esRequest_({
    caller: 'ACCOUNT_BALANCE',
    action: 'balance',
    module: 'account',
    params: {
      address: validateEthereumAddress_(address),
      ...(tag == null ? {} : {tag}),
    },
  });
}


