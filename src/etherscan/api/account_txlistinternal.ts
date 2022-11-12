/// <reference path="../common.ts" />
/// <reference path="../../validators.ts" />

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-internal-transactions-by-address
 *
 * @customfunction
 */
// XXX full docs
function ES$ACCOUNT_TXLISTINTERNAL(
  address: EthereumAddress,
  startblock?: number,
  endblock?: number,
  page?: number,
  offset?: number,
  sort?: EtherscanSort,
) {
  return esRequest_({
    caller: 'ES$ACCOUNT_TXLISTINTERNAL',
    action: 'txlistinternal',
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
