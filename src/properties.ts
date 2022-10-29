// XXX create a function that can prompt the user for a value and save it
function getProperty_({ key }:  { key: 'ETHERSCAN_API_KEY' }) {
  const properties = PropertiesService.getScriptProperties();
  return properties.getProperty(key);
}
