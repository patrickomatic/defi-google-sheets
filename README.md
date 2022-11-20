# Spreadsheet API

Once you've successfully added defi-google-sheets to your spreadsheet, you'll have access to the following functions:

# defi-google-sheets

A collection of functions that can be used in a Google Spreadsheet to pull info about DeFi/crypto assets. 

Currently supported APIs:

* [beaconcha.in](https://beaconcha.in) - [documentation](docs/BEACONCHAIN.md)
* [etherscan.io](https://etherscan.io) - [documentation](docs/ETHERSCAN.md)
* [blockstream.info](https://blockstream.info) - [documentation](docs/BLOCKSTREAM.md)

## Motivation

There are several similar libraries, but IMO they had the following downsides:

* A subscription-based model.  These all seemed to have a backend that proxied the API calls rather 
* Specific to a spreadsheet.  There are several "net worth" tracker type apps which are nice, but they work by supplying a pre-canned spreadsheet and you fill in the data.  

The key idea for this library is to provide a simple wrapper function around the underlying API calls.  We don't want to be tied heavily to the Google Sheet's API or any underlying assumptions about the spreadsheet using it.

# How to use on your Google Spreadsheet

1. On your spreadsheet click Extensions -> Apps Script
1. Click the "+" next to Libraries
1. Enter this libraries Script ID: `1hsL\_MpXDchOZcavD217yl7tmX19KzXRnNUtnWbKUv8u3r1alFtiXbBlh`

## [Contributing](docs/CONTRIBUTING.md)
## [Testing](docs/TESTING.md)
