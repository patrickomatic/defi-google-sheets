/// <reference path="../types.d.ts" />
/// <reference path="../network.ts" />
/// <reference path="../pickFields.ts" />
/// <reference path="../validators.ts" />
/// <reference path="./types.ts" />
// TODO from what I can tell they don't have a published rate limit

// https://github.com/Blockstream/esplora/blob/master/API.md
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
    throw new Error(`Error calling Blockstream.info API: status=${response}`);
  }

  // XXX paginate
  return response;
}
