interface BeaconchainOkResponse<T> {
  status: "OK";
  data: T;
}

interface BeaconchainErrorResponse {
  status: "ERROR: could not retrieve db results";
  data: null;
}

type BeaconchainAPIResponse<T> = BeaconchainOkResponse<T> | BeaconchainErrorResponse;

type SlotOrHash = number | Hex;
type IndexOrPubkey = number | Hex;
