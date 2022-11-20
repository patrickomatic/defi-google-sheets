type SpreadsheetCell = number | string | Date;
type SpreadsheetRow = SpreadsheetCell[];
type EmptySpreadsheetRow = ["No results"];

type Hex = string;
type EthereumAddress = Hex;

type BitcoinAddress = string; // bitcoin addresses aren't hex

type AllFields = "*";
type FieldsOrAll<T> = readonly (keyof T)[] | AllFields;

type Satoshi = number;
type Gwei = number;
type Wei = number;
