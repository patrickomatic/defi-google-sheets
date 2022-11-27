# General
- [ ] the README needs some better wording, more explanation
- [ ] use more eslint best practices (no unused vars, etc)
- [ ] use validators in more places, clean up the interface/terminology
- [ ] make fields more forgiveable by making it all case insensitive
- [ ] fix global types and/or polyfill the GS API.  (though it doesn't really matter unless we can test)
- [ ] unit tests/CI
- [ ] I can probably simplify/modernize my tsconfig
- [x] make `fields` work consistently if it's an array of strings, single value or comma-joined string 

# Documentation
- [ ] get rid of the "Kind: global function"
- [x] have them include a header of fields
- [x] looks like "Done in 1.72s" is being added to the bottom of the generated file...
- [x] generate test CSVs from @example jsdocs
- [x] split up the docs by API

# beaconcha.in - Ethereum
- [ ] make all of them take a startDate and endDate even if the underlying API doesn't support it
- [ ] implement: Rocketpool
- [ ] implement: SyncCommittee
- [ ] implement: Validator
- [ ] implement: Execution
- [ ] implement: User
- [ ] implement: Charts
- [ ] implement: ETH.STORE
- [ ] implement: Graffitiwall
- [x] implement: Block
- [x] implement: Epoch
- [x] implement: Eth1
- [x] implement: Health

# etherscan.io - Ethereum
- [ ] implement: Geth/Parity Proxy
- [ ] implement: Gas Tracker
- [ ] the rate limits depend on your plan, so make it configurable (and document)
- [ ] document: all properties: override the URL for a test network, rate limit
- [ ] some endpoints have their own rate limits: https://docs.etherscan.io/api-endpoints/tokens#get-address-erc20-token-holding
- [ ] Figure out a URL to download the Postman JSON so I don't have it stored in templates/etherscan/
- [ ] it's not great that their API just returns strings for all values... I can apply reverse validators I guess
- [ ] implement: Contracts - low priority, I don't even know 
- [x] implement: Tokens
- [x] implement: Logs
- [x] implement: Blocks
- [x] implement: Transactions
- [x] implement: Accounts
- [x] implement: Stats

# blockstream.info - Bitcoin
- [ ] implement: Addresses endpoints
- [ ] implement: Blocks endpoints
- [ ] implement: Mempool endpoints
- [ ] implement: Assets endpoints

# blockfrost.io - Cardano
- [ ] implement all of it 

# ??? - Solana
- [ ] figure out what APIs are available
