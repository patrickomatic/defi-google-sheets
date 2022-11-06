# Contributing

There are several design decisions to keep in mind when working on this codebase. 

## Imports & Dependencies

Since Google Sheets seems to re-evaluate all global objects every time a function is run (citation needed) the use of webpack's module loading functions don't seem to work.  The end result needs to compile the code to just a simple file with functions and all relevant dependencies.  My hacky way of doing this is to not rely on any module loading system and instead use Typescript's triple-slash directives (`/// <reference path="..." />`) to manage dependencies.

This has the huge downside that we can't really use node to import any third-party libraries.  This might not be so much of a downside because keeping the code here minimal and simple is key.
