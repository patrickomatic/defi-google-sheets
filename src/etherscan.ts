/// <reference path="./network.ts" />
/// <reference path="./properties.ts" />

const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
const ETHERSCAN_API_KEY = getProperty_({ key: 'ETHERSCAN_API_KEY' });

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-a-single-address
 *
 */
function ACCOUNT_BALANCE(address: string, tag?: 'earliest' | 'latest' | 'pending') {
  return makeRequest_(ETHERSCAN_API_URL, {
    action: 'balance',
    address,
    apikey: ETHERSCAN_API_KEY,
    module: 'account',
    ...(tag == null ? {} : {tag}),
  });
}

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-multiple-addresses-in-a-single-call
 *
 */
function ACCOUNT_BALANCEMULTI() {
  // TODO
  return 0;
}

// XXX handle sort: 'asc' | 'desc' param?
/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address
 *
 */
function ACCOUNT_TXLIST(address: string, startBlock: number, endBlock: number, page?: number, offset?: number) {
  // TODO
  return 0;
}
