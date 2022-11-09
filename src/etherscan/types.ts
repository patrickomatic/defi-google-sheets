type EtherscanTag = 'earliest' | 'latest' | 'pending';
type EtherscanSort = 'asc' | 'desc';

type EtherscanResponseErrorStatus = "0";
type EtherscanResponseSuccessStatus = "1";

interface EtherscanResponse<T> {
  status: EtherscanResponseErrorStatus | EtherscanResponseSuccessStatus;
  message: string;
  result: T;
}
