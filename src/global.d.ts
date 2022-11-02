export {};

declare global {
  // namespace Logger {
    // const log: (_message: string) => void;
// }
  const Logger: any;
  const UrlFetchApp: any;
  const PropertiesService: any;
  const SpreadsheetApp: any;

  /*
  interface Logger {
    log: (message: string) => void;
  }

  interface UrlFetchApp {
    fetch: (url: string) => void;
  }
  */
}
