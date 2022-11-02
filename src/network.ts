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
  Logger.log(`got response[${response}]`);
  Logger.log(`got marshallFn[${marshallFn}]`);
  return marshallFn == null ? response : marshallFn(response);
}
