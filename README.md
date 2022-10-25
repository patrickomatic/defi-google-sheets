# google-sheets-crypto-import

Some functions that can be used in a Google Spreadsheet to track crypto staking statistics.

For Ethereum staking, we're pulling statistics from [beaconcha.in](https://beaconcha.in)

## ETH Validator Daily Statistics

Just put into a spreadsheet cell:

```
=ETH_VALIDATOR_DAILY_PERFORMANCE(validatorIndex)
```

where `validatorIndex` is the numeric index of your validator and all stats from beaconcha.in will be inserted into the spreadsheet.

### TODO
- [ ] Respect rate limits
- [ ] Polyfills for the Google Apps Script functions I use

## Scraping Cardano

### TODO
- [ ] Use cardanoscan? blockchair?
