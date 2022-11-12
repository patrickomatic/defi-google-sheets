/// <reference path="../common.ts" />
/// <reference path="../../validators.ts" />

interface EtherscanAccountBalanceMultiResponse {
  account: EthereumAddress;
  balance: Wei;
}

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-multiple-addresses-in-a-single-call
 *
 * @customfunction
 */
function ES$ACCOUNT_BALANCEMULTI(
  addresses: EthereumAddress[],
  fields: FieldsOrAll<EtherscanAccountBalanceMultiResponse> = '*',
  tag?: EtherscanTag,
): SpreadsheetRow[] {
  return pickFields_({
    rows: esRequest_<EtherscanAccountBalanceMultiResponse[]>({
      caller: 'ES$ACCOUNT_BALANCEMULTI',
      action: 'balancemulti',
      module: 'account',
      params: {
        address: addresses.map(validateEthereumAddress_).join(','),
        tag,
      },
    }),
    fields,
  });
}
