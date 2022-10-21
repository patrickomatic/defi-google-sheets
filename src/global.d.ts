export {};

declare global {
  const Logger: any;
  const UrlFetchApp: any;
  /*
  interface Logger {
    log: (message: string) => void;
  }

  interface UrlFetchApp {
    fetch: (url: string) => void;
  }
  */
}
