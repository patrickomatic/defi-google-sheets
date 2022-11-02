/// <reference path="./network.ts" />
/// <reference path="./properties.ts" />

const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
const ETHERSCAN_API_KEY = getProperty_({key: 'ETHERSCAN_API_KEY'});

type EtherscanTag = 'earliest' | 'latest' | 'pending';
type EtherscanSort = 'asc' | 'desc';

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-a-single-address
 *
 */
// XXX full docs
function ACCOUNT_BALANCE(address: string, tag?: EtherscanTag) {
  return makeRequest_({
    url: ETHERSCAN_API_URL,
    params: {
      action: 'balance',
      address,
      apikey: ETHERSCAN_API_KEY,
      module: 'account',
      ...(tag == null ? {} : {tag}),
    },
  });
}

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-multiple-addresses-in-a-single-call
 *
 */
// XXX full docs
function ACCOUNT_BALANCEMULTI(addresses: string[], tag?: EtherscanTag) {
  return makeRequest_({
    url: ETHERSCAN_API_URL,
    params: {
      action: 'balancemulti',
      address: addresses.join(','),
      apikey: ETHERSCAN_API_KEY,
      module: 'account',
      ...(tag == null ? {} : {tag}),
    },
  });
}

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address
 *
 */
// XXX full docs
function ACCOUNT_TXLIST(address: string, startBlock: number, endBlock: number, page?: number, offset?: number, sort?: EtherscanSort) {
  return makeRequest_({
    url: ETHERSCAN_API_URL,
    params: {
      action: 'txlist',
      address,
      apikey: ETHERSCAN_API_KEY,
      module: 'account',
      ...(startBlock == null ? {} : {startblock: startBlock}),
      ...(endBlock == null ? {} : {endblock: endBlock}),
      ...(page == null ? {} : {page}),
      ...(offset == null ? {} : {offset}),
      ...(sort == null ? {} : {sort}),
    },
  });
}

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-internal-transactions-by-address
 *
 */
// XXX full docs
function ACCOUNT_TXLISTINTERNAL(address: string, startBlock: number, endBlock: number, page?: number, offset?: number, sort?: EtherscanSort) {
  return makeRequest_({
    url: ETHERSCAN_API_URL,
    params: {
      action: 'txlistinternal',
      address,
      apikey: ETHERSCAN_API_KEY,
      module: 'account',
      ...(startBlock == null ? {} : {startblock: startBlock}),
      ...(endBlock == null ? {} : {endblock: endBlock}),
      ...(page == null ? {} : {page}),
      ...(offset == null ? {} : {offset}),
      ...(sort == null ? {} : {sort}),
    },
  });
}
