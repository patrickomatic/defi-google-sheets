/// <reference path="../common.ts" />
/// <reference path="../../validators.ts" />

/**
 * @customfunction
 */
// XXX full docs
function ES$ACCOUNT_TOKENNFTTX(
  address: EthereumAddress,
  contractaddress: EthereumAddress,
  startblock?: number,
  endblock?: number,
  page?: number,
  offset?: number,
  sort?: EtherscanSort,
) {
  return esRequest_({
    caller: 'ACCOUNT_TOKENNFTTX',
    action: 'tokennfttx',
    module: 'account',
    params: {
      address: validateEthereumAddress_(address),
      contractaddress,
      startblock,
      endblock,
      page,
      offset,
      sort,
    },
  });
}
