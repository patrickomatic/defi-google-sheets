/// <reference path="../types.d.ts" />
/// <reference path="./types.ts" />
/// <reference path="../validators.ts" />

const BEACONCHAIN_API = "https://beaconcha.in" as const;
const BEACONCHAIN_API_VERSION = "v1" as const;
const BEACON_CHAIN_EPOCH_DATE = "01/12/2020" as const;

// XXX this doesn't work (it calculates the date wrong)
function dateFromEpic_(date: number): Date {
  const statsDate = new Date(BEACON_CHAIN_EPOCH_DATE);
  statsDate.setDate(statsDate.getDate() + date);
  return statsDate;
}

function bcRequest_<T>({
  apiPath,
  // XXX take an offset too?
  limit,
}: {
  apiPath: string;
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
  return limit != null && Array.isArray(data) ? data.slice(0, limit) : data;
}

function pickFields_<T extends object>({
  row,
  fields,
}: {
  row: T;
  fields: readonly (keyof T)[] | AllFields;
}): SpreadsheetRow {
  if (fields === '*') {
    return Object.keys(row).sort().map((key) => row[key]);
  } else {
    // @ts-expect-error
    return fields.map((field) => row[field]);
      // (stat === 'date' ? dateFromEpic_(row.day) : row[stat]));
  }
}
