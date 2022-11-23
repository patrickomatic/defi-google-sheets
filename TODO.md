# General
- [ ] use more eslint best practices (no unused vars, etc)
- [ ] use validators in more places
- [ ] make fields more forgiveable by making it all case insensitive
- [ ] fix global types and/or polyfill the GS API.  (though it doesn't really matter unless we can test)
- [ ] unit tests/CI
- [ ] I can probably simplify/modernize my tsconfig
- [x] make `fields` work consistently if it's an array of strings, single value or comma-joined string 

# Documentation
- [ ] have them include a header of fields
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
- [ ] implement: Accounts
- [ ] implement: Contracts
- [ ] implement: Transactions
- [ ] implement: Blocks
- [ ] implement: Logs
- [ ] implement: Geth/Parity Proxy
- [ ] implement: Tokens
- [ ] implement: Gas Tracker
- [ ] it sucks that their API just returns strings... I can apply reverse validators I guess
- [ ] Figure out a URL to download the Postman JSON so I don't have it stored in templates/etherscan/
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
