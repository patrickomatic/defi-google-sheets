export {};

// TODO better types!!! (but I can't seem to get it to work without providing an implementation)
declare global {
  // namespace Logger {
    // const log: (_message: string) => void;
// }
  const CacheService: any;
  const LockService: any;
  const Logger: any;
  const PropertiesService: any;
  const UrlFetchApp: any;
  const Utilities: any;


  /*
  interface Logger {
    log: (message: string) => void;
  }

  interface UrlFetchApp {
    fetch: (url: string) => void;
  }
  */
}
