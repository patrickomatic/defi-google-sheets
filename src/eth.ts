// XXX need to respect rate limit

function ETH_VALIDATOR_REWARDS(validatorAddress: string, beaconchainAPIKey: string) {
  Logger.log(`Syncing transactions for ${validatorAddress}`);

  var response = UrlFetchApp.fetch(
    `https://beaconcha.in/api/v1/validator/${validatorAddress}/balancehistory`,
    {
      headers: {
        apikey: Utilities.base64Encode(beaconchainAPIKey, Utilities.Charset.UTF_8),
      }   
  },
  ).getContentText()
  response = JSON.parse(response);

  for (var key in response){
    Logger.log(key);
  }
}
