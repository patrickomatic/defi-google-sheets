# google-sheets-crypto-import

Some functions that can be used in a Google Spreadsheet to track crypto staking statistics.

For Ethereum staking, we're pulling statistics from [beaconcha.in](https://beaconcha.in)

# How to use on your Google Spreadsheet

1. On your spreadsheet click Extensions -> Apps Script
1. Click the "+" next to Libraries
1. Enter this libraries Script ID: 1hsL\_MpXDchOZcavD217yl7tmX19KzXRnNUtnWbKUv8u3r1alFtiXbBlh

## ETH Validator Daily Statistics

Just put into a spreadsheet cell:

```
=ETH_VALIDATOR_DAILY_PERFORMANCE(validatorIndex)
```

where `validatorIndex` is the numeric index of your validator and all stats from beaconcha.in will be inserted into the spreadsheet.  optionally you can supply a second parameter `stats` which are the various stats you would like to use:

### Example Usages

Show all stats for the validator at index 209112:

```
=ETH_VALIDATOR_DAILY_PERFORMANCE(209112)
```

Show only missed blocks and day for the validator at index 209112:

```
=ETH_VALIDATOR_DAILY_PERFORMANCE(209112, {"day","missed_blocks'})
```

## Scraping Cardano

### TODO
- [ ] Use cardanoscan? blockchair?
