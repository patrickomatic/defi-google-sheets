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
# How to use on your Google Spreadsheet

1. On your spreadsheet click Extensions -> Apps Script
1. Click the "+" next to Libraries
1. Enter this libraries Script ID: 1hsL\_MpXDchOZcavD217yl7tmX19KzXRnNUtnWbKUv8u3r1alFtiXbBlh

# Spreadsheet API

Once you've successfully added defi-google-sheets to your spreadsheet, you'll have access to the following functions:

# Contributing

There are several design decisions to keep in mind when working on this codebase. 

## Imports & Dependencies

Since Google Sheets seems to re-evaluate all global objects every time a function is run (citation needed) the use of webpack's module loading functions don't seem to work.  The end result needs to compile the code to just a simple file with functions and all relevant dependencies.  My hacky way of doing this is to not rely on any module loading system and instead use Typescript's triple-slash directives (`/// <reference path="..." />`) to manage dependencies.

This has the huge downside that we can't really use node to import any third-party libraries.  This might not be so much of a downside because keeping the code here minimal and simple is key.
