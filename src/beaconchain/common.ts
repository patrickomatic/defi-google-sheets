/// <reference path="../types.d.ts" />
/// <reference path="./types.ts" />
/// <reference path="../validators.ts" />

const BEACONCHAIN_API = "https://beaconcha.in" as const;
const BEACONCHAIN_API_VERSION = "v1" as const;
const BEACON_CHAIN_EPOCH_DATE = "01/12/2020" as const;

function bcRequest_<T>({
  apiPath,
  offset = 0,
  limit,
}: {
  apiPath: string;
  offset?: number;
  limit?: number;
}): T {
  const url = `${BEACONCHAIN_API}/api/${BEACONCHAIN_API_VERSION}/${apiPath}`;
  const {status, data} = makeRequest_<BeaconchainAPIResponse<T>>({
    url,
    marshallFn: (response) => JSON.parse(response) as BeaconchainOkResponse<T>,
  });

  if (status !== 'OK') {
    Logger.log(`Error making Beaconcha.in API request url=${url} ${JSON.stringify(data)}`);
    throw new Error(`Error calling Beaconcha.in API: status=${status}`);
  }

  Logger.log(`returning ${JSON.stringify(data)}`);

  // @ts-expect-error
  return limit != null && Array.isArray(data) 
    ? data.slice(offset, limit)
    : data;
}

function pickFields_<
  T extends object, 
  V extends object,
>({
  row,
  fields,
  virtualFields = {},
}: {
  row: T;
  fields: readonly (keyof (T & V))[] | AllFields;
  virtualFields?: {[k in keyof V]: (T) => SpreadsheetCell} | Record<string, never>;
}): SpreadsheetRow {
  const resolveField = (field) => field in virtualFields ? virtualFields[field] : row[field];
  if (fields === '*') {
    return Object.keys(row).concat(Object.keys(virtualFields)).sort().map(resolveField);
  } else {
    return fields.map(resolveField);
  }
}
