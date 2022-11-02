type GSPropertyKey = 'DEFI_ETHERSCAN_API_KEY';

// XXX create a thing in the README that says how to set the relevant API keys for each service
const HELP_URL = "https://github.com/patrickomatic/defi-google-sheets/" as const;
function getProperty_({
  key, 
  caller,
}:  {
  key: GSPropertyKey;
  caller: string; 
}) {
  const properties = PropertiesService.getScriptProperties();

  const value = properties.getProperty(key);
  if (value == null) {
    throw `You must set ${key} to call ${caller}`;
  }

  return value;
}
