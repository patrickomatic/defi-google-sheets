/// <reference path="../types.d.ts" />
/// <reference path="../network.ts" />
/// <reference path="../pickFields.ts" />
/// <reference path="../validators.ts" />
/// <reference path="./types.ts" />

const BLOCKSTREAM_API_URL = "https://blockstream.info/api";

function bsRequest_<T>({
  apiPath,
  offset = 0,
  limit,
}: {
  apiPath: string;
  offset?: number;
  limit?: number;
}): T {
  const url = `${BLOCKSTREAM_API_URL}/${apiPath}`;
  const response = makeRequest_<T>({
    url,
    marshallFn: (response) => JSON.parse(response),
  });

  if (response == null) {
    // XXX how else to check error codes?
    Logger.log(`Error making blocksteream.info API request url=${url}`);
    throw new Error(`Error calling Beaconcha.in API: status=${response}`);
  }

  // XXX paginate
  return response;
}
