/// <reference path="../common.ts" />
/// <reference path="../../validators.ts" />

/**
 * @customfunction
 */
// XXX full docs
function ES$ACCOUNT_TOKENTX(
  address: EthereumAddress,
  contractAddress: EthereumAddress,
  startblock: number,
  endblock: number,
  page?: number,
  offset?: number,
  sort?: EtherscanSort,
) {
  return esRequest_({
    caller: 'ES$ACCOUNT_TOKENTX',
    action: 'tokentx',
    module: 'account',
    params: {
      address: validateEthereumAddress_(address),
      contractaddress: contractAddress,
      startblock,
      endblock,
      page,
      offset,
      sort,
    },
  });
}
