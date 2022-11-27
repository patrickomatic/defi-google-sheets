# defi-google-sheets

A collection of functions that can be used in a Google Spreadsheet to pull info about DeFi/cryptocurrency assets. 

Currently supported APIs:

* [beaconcha.in](https://beaconcha.in) 
* [etherscan.io](https://etherscan.io)

# Documentation

Each supported API comes with a set of functions:

* [beaconcha.in functions](docs/BEACONCHAIN.md)
* [etherscan.io functions](docs/ETHERSCAN.md)

# How to use on your Google Spreadsheet

1. On your spreadsheet click Extensions -> Apps Script
1. Click the "+" next to Libraries
1. Enter this libraries Script ID: `1hsL\_MpXDchOZcavD217yl7tmX19KzXRnNUtnWbKUv8u3r1alFtiXbBlh`

## Motivation

There are several libraries and ways of managing crypto out there but I wanted something simpler:

* They cost money rather than just being an API wrapper
* Specific to a spreadsheet.  There are several "net worth" tracker type apps which are nice, but they work by supplying a pre-canned spreadsheet and you fill in the data.  

The key idea for this library is to provide a simple one-to-one wrapper around the API which allows you to build your own spreadsheets.

## [Contributing](docs/CONTRIBUTING.md)

## [Testing](docs/TESTING.md)
