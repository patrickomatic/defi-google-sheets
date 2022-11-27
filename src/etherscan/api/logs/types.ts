interface EtherscanLogsGetlogsResponse {
  address: EthereumAddress;
  topics: Hex[];
  data: Hex;
  blockNumber: Hex; 
  timeStamp: Hex;
  gasPrice: Hex;
  gasUsed: Hex;
  logIndex: Hex;
  transactionHash: Hex;
  transactionIndex: Hex;
}
