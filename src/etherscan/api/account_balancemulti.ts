/// <reference path="../common.ts" />
/// <reference path="../../validators.ts" />

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-multiple-addresses-in-a-single-call
 *
 */
// XXX full docs
function ACCOUNT_BALANCEMULTI(
  addresses: EthereumAddress[],
  tag?: EtherscanTag,
) {
  return esRequest_({
    caller: 'ACCOUNT_BALANCEMULTI',
    action: 'balancemulti',
    module: 'account',
    params: {
      address: addresses.map(validateEthereumAddress_).join(','),
      ...(tag == null ? {} : {tag}),
    },
  });
}


