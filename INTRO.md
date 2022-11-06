# defi-google-sheets

A collection of functions that can be used in a Google Spreadsheet to pull DeFi/crypto asset prices. 

Currently supported APIs:

* [beaconcha.in](https://beaconcha.in)
* [etherscan.io](https://etherscan.io)
* [blockstream.info](https://blockstream.info)

## Motivation

There are several similar libraries, but IMO they had the following downsides:

* A subscription-based model.  These all seemed to have a backend that proxied the API calls rather 
* Specific to a spreadsheet.  There are several "net worth" tracker type apps which are nice, but they work by supplying a pre-canned spreadsheet and you fill in the data.  

The key idea for this library is to provide a simple wrapper function around the underlying API calls.  We don't want to be tied heavily to the Google Sheet's API or any underlying assumptions about the spreadsheet using it.
