/// <reference path="./types.d.ts" />

function buildUrl_(url, params) {
  if (params == null) {
    return url;
  }

  const paramString = Object.keys(params).map((key) =>
    `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
  ).join('&');

  return `${url}?${paramString}`;
}

function makeRequest_<T>({
  url,
  params,
  marshallFn,
}: {
  url: string;
  params?: object;
  marshallFn?: (arg: any) => T;
}): T {
  const response = UrlFetchApp.fetch(buildUrl_(url, params)).getContentText();
  return marshallFn == null ? response : marshallFn(response);
}
