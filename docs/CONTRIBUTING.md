# Contributing

## Design Considerations

1. In order to work with Google Sheets, the resultant code must compile to plain JS, without a reliance on a module loading system operating with `global` vars
  * More details on this below
2. Rely heavily on jsdoc
  * It gives us documentation that will show up in the GS UI
  * Can generate markdown for github documentation
  * Can generate tests from the @examples
3. Use jinja to avoid duplication
  * Most of the underlying APIs provide some kind of JSON documentation, so rely on jinja injecting that rather than copying and pasting it into our jsdocs
4. A preference for Makefile and unix build philosophies over a bunch of node dependencies

## Imports & Dependencies

Since Google Sheets seems to re-evaluate all global objects every time a function is run (citation needed) the use of webpack's module loading functions don't seem to work.  The end result needs to compile the code to just a simple file with functions and all relevant dependencies.  My hacky way of doing this is to not rely on any module loading system and instead use Typescript's triple-slash directives (`/// <reference path="..." />`) to manage dependencies.

This has the huge downside that we can't really use node to import any third-party libraries.  This might not be so much of a downside because keeping the code here minimal and simple is key.
