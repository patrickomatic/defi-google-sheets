/// <reference path="./types.d.ts" />

// in Google Sheets, everything is a number, a string or undefined. or an array of those things
type GSPrimitive = string | number | undefined;
type GSInput = GSPrimitive | GSPrimitive[];

function mapOrSingle_(input, fn) {
  return Array.isArray(input) ? input.map((i) => fn(i)) : fn(input);
}

function asString_(input: GSInput): string | string[] {
  return mapOrSingle_(input, String);
}

function toNumberOrThrow_(input: GSPrimitive) {
  const num = Number(input);
  if (isNaN(num)) {
    // XXX is there a UI we can pop up? or more native way of doing this
    throw new Error(`DEFI: ${input} could not be parsed as a number`);
  }
  return num;
}

function asNumber_(input: GSInput): number | number[] {
  return mapOrSingle_(input, toNumberOrThrow_);
}

const HEX_REGEX = /^0x?[a-fA-F0-9]+$/i;

function validateHex_(input: string): Hex {
  if (!input.match(HEX_REGEX)) {
    throw new Error(`DEFI: ${input} is not hexadecimal`);
  }
  return input as Hex;
}

function asHex_(input: GSInput): Hex | Hex[] {
  return mapOrSingle_(input, validateHex_);
}

function validateEthereumAddress_(input: string): EthereumAddress {
  const hex = validateHex_(input);
  const expectedLength = (hex.startsWith("0x") || hex.startsWith("0X")) ? 42 : 40;
  if (hex.length !== expectedLength) {
    throw new Error(`DEFI: ${input} is not a valid Ethereum address`);
  }
  return hex as EthereumAddress;
}

function asEthereumAddress_(input: GSInput): EthereumAddress | EthereumAddress[] {
  return mapOrSingle_(input, validateEthereumAddress_);
}

// 0, O, I and l are omitted. 26 to 35 characters and begins with 1, 3 or bc1
const BITCOIN_ADDRESS_REGEX = /^(bc1|[13])[a-zA-HJ-NP-Z1-9]{25,39}$/;
function validateBitcoinAddress_(input: string): BitcoinAddress {
  if (!input.match(BITCOIN_ADDRESS_REGEX)) {
    throw new Error(`DEFI: ${input} is not a valid Bitcoin address`);
  }
  return input as BitcoinAddress;
}
