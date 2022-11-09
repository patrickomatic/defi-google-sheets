/// <reference path="../common.ts" />
/// <reference path="../../validators.ts" />

/**
 * @customfunction
 */
// XXX full docs
function ES$ACCOUNT_TOKENTX(
  address: EthereumAddress,
  contractAddress: EthereumAddress,
  startBlock: number,
  endBlock: number,
  page?: number,
  offset?: number,
  sort?: EtherscanSort,
) {
  return esRequest_({
    caller: 'ACCOUNT_TOKENTX',
    action: 'tokentx',
    module: 'account',
    params: {
      address: validateEthereumAddress_(address),
      contractaddress: contractAddress,
      ...(startBlock == null ? {} : {startblock: startBlock}),
      ...(endBlock == null ? {} : {endblock: endBlock}),
      ...(page == null ? {} : {page}),
      ...(offset == null ? {} : {offset}),
      ...(sort == null ? {} : {sort}),
    },
  });
}
