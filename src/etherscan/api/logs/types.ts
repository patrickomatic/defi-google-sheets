interface EtherscanLogsGetlogsResponse {
  address: EthereumAddress;
  blockNumber: Hex; 
  data: Hex;
  gasPrice: Hex;
  gasUsed: Hex;
  logIndex: Hex;
  timeStamp: Hex;
  topics: Hex[];
  transactionHash: Hex;
  transactionIndex: Hex;
}
