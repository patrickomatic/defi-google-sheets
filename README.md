# defi-google-sheets

Some functions that can be used in a Google Spreadsheet to track crypto staking statistics.

For Ethereum staking, we're pulling statistics from [beaconcha.in](https://beaconcha.in)
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
