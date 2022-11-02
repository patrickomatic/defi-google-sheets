/// <reference path="./network.ts" />
/// <reference path="./properties.ts" />

// TODO create an optional property that can reference test APIs:
// https://docs.etherscan.io/getting-started/endpoint-urls
const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
const ETHERSCAN_API_KEY_PROPERTY = 'DEFI_ETHERSCAN_API_KEY';

type EtherscanTag = 'earliest' | 'latest' | 'pending';
type EtherscanSort = 'asc' | 'desc';

function esRequest_({
  action,
  caller,
  module,
  params,
}: { 
  action: string;
  caller: string;
  module: string; 
  params: any,
}) {
  return makeRequest_({
    url: ETHERSCAN_API_URL,
    params: {
      action,
      module,
      apikey: getProperty_({ caller, key: ETHERSCAN_API_KEY_PROPERTY }),
      ...params,
    },
  });
}

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-ether-balance-for-a-single-address
 *
 */
// XXX full docs
function ACCOUNT_BALANCE(
  address: EthereumAddress,
  tag?: EtherscanTag,
) {
  return esRequest_({
    caller: 'ACCOUNT_BALANCE',
    action: 'balance',
    module: 'account',
    params: {
      address: validateEthereumAddress_(address),
      ...(tag == null ? {} : {tag}),
    },
  });
}

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

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address
 *
 */
// XXX full docs
function ACCOUNT_TXLIST(
  address: EthereumAddress,
  startBlock?: number,
  endBlock?: number,
  page?: number,
  offset?: number,
  sort?: EtherscanSort,
) {
  return esRequest_({
    caller: 'ACCOUNT_TXLIST',
    action: 'txlist',
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

/**
 * https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-internal-transactions-by-address
 *
 * @customfunction
 */
// XXX full docs
function ACCOUNT_TXLISTINTERNAL(
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

/**
 * @customfunction
 */
// XXX full docs
function ACCOUNT_TOKENTX(
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


/**
 * @customfunction
 */
// XXX full docs
function ACCOUNT_TOKENNFTTX(
  address: EthereumAddress,
  contractAddress: EthereumAddress,
  startBlock: number,
  endBlock: number,
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
      contractaddress: contractAddress,
      ...(startBlock == null ? {} : {startblock: startBlock}),
      ...(endBlock == null ? {} : {endblock: endBlock}),
      ...(page == null ? {} : {page}),
      ...(offset == null ? {} : {offset}),
      ...(sort == null ? {} : {sort}),
    },
  });
}
