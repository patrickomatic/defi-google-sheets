/// <reference path="./types.d.ts" />

function makeRequest_<T>({
  url,
  params,
  marshallFn,
}: {
  url: string;
  params?: object;
  marshallFn?: (arg: any) => T;
}): T {
  const response = UrlFetchApp.fetch(url, params ?? {}).getContentText();
  return marshallFn == null ? response : marshallFn(response);
}
