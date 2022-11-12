/// <reference path="../common.ts" />
/// <reference path="../../validators.ts" />

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address
 *
 */
// XXX full docs
function ES$ACCOUNT_TXLIST(
  address: EthereumAddress,
  startblock?: number,
  endblock?: number,
  page?: number,
  offset?: number,
  sort?: EtherscanSort,
) {
  return esRequest_({
    caller: 'ES$ACCOUNT_TXLIST',
    action: 'txlist',
    module: 'account',
    params: {
      address: validateEthereumAddress_(address),
      startblock,
      endblock,
      page,
      offset,
      sort,
    },
  });
}
