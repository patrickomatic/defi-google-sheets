type SpreadsheetCell = number | string | Date;
type SpreadsheetRow = SpreadsheetCell[];

type Hex = string;
type EthereumAddress = Hex;

type AllFields = "*";
type FieldsOrAll<T> = readonly (keyof T)[] | AllFields
