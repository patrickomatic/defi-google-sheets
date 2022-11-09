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
  startBlock?: number,
  endBlock?: number,
  page?: number,
  offset?: number,
  sort?: EtherscanSort,
) {
  return esRequest_({
    caller: 'ACCOUNT_TXLISTINTERNAL',
    action: 'txlistinternal',
    module: 'account',
    params: {
      address: validateEthereumAddress_(address),
      ...(startBlock == null ? {} : {startblock: startBlock}),
      ...(endBlock == null ? {} : {endblock: endBlock}),
      ...(page == null ? {} : {page}),
      ...(offset == null ? {} : {offset}),
      ...(sort == null ? {} : {sort}),
    },
  });
}
