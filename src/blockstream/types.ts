interface BlockstreamTxVoutPegout {
  genesis_hash: Hex;
  scriptpubkey: Hex;
  scriptpubkey_asm: string;
  scriptpubkey_address: BitcoinAddress;
}

interface BlockstreamTxVout {
  scriptpubkey: Hex;
  scriptpubkey_asm: string,
  scriptpubkey_type: string,
  scriptpubkey_address: BitcoinAddress,
  value: Satoshi;
  valuecommitment?: Satoshi;
  asset?: Satoshi;
  assetcommitment?: Satoshi;
  pegout: BlockstreamTxVoutPegout | null;
}

interface BlockstreamTxVinIssuance {
  asset_id: Hex;
  is_reissuance: boolean;
  asset_binding_nonce: string;
  asset_entropy: string;
  contract_hash: Hex;
  assetamount?: Satoshi;
  assetamountcommitment?: Satoshi;
  tokenamount?: Satoshi;
  tokenamountcommitment?: Satoshi;
}

interface BlockstreamTxVin {
  txid: Hex;
  vout: Hex;
  is_coinbase: boolean;
  scriptsig: string; 
  scriptsig_asm: string;
  inner_redeemscript_asm: string;
  inner_witnessscript_asm: string;
  sequence: number;
  witness: Hex[];
  prevout: BlockstreamTxVout;
  is_pegin?: boolean;
  issuance?: BlockstreamTxVinIssuance;
}

interface BlockstreamTxStatus {
  confirmed: boolean;
  block_height: number | null;
  block_hash: Hex | null;
  block_time: number | null;
}

interface BlockstreamTx {
  txid: Hex;
  version: number;
  locktime: number;
  size: number;
  weight: number;
  fee: Satoshi;
  vin: BlockstreamTxVin[];
  vout: BlockstreamTxVout[];
  status: BlockstreamTxStatus;
}
