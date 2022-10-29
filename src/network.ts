/// <reference path="./types.d.ts" />

// XXX this type is a lie - make it polymorphic
function makeRequest_(url: string, params?: object): BeaconchainAPIResponse {
  return JSON.parse(UrlFetchApp.fetch(url, params ?? {}).getContentText());
}
