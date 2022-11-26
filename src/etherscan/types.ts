type EtherscanClosest = 'before' | 'after';
type EtherscanTag = 'earliest' | 'latest' | 'pending';
type EtherscanSort = 'asc' | 'desc';

type EtherscanResponseErrorStatus = "0";
type EtherscanResponseSuccessStatus = "1";

interface EtherscanResponse<T> {
  status: EtherscanResponseErrorStatus | EtherscanResponseSuccessStatus;
  message: string;
  result: T;
}

interface EtherscanAccountTokentxResponse {
 blockHash: Hex;
 blockNumber: string; // number
 confirmations: string; // number
 contractAddress: EthereumAddress;
 cumulativeGasUsed: string; // Wei
 from: EthereumAddress;
 gas: string; // number
 gasPrice: string; // number
 gasUsed: string;
 hash: Hex;
 input: string;
 nonce: string; // number
 timeStamp: string; // number
 to: EthereumAddress;
 tokenDecimal: string; // number
 tokenName: string;
 tokenSymbol: string;
 transactionIndex: string; // number
 value: string; // number
}

interface EtherscanAccountTxlistinternalResponse {
  blockNumber: string; // number
  contractAddress: string; // EthereumAddress
  errCode: string;
  from: string; // EthereumAddress
  gas: string; // Wei
  gasUsed: string; // Wei
  hash: string; // Hex
  input: string; 
  isError: string; // number
  timeStamp: string; // number
  to: string; // EthereumAddress
  traceId: string; // number
  type: string;
  value: string; // number
}


