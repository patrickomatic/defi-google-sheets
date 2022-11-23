## Functions

<dl>
<dt><a href="#BC$BLOCK">BC$BLOCK(slotOrHash, [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get block</p>
</dd>
<dt><a href="#BC$BLOCK_ATTESTATIONS">BC$BLOCK_ATTESTATIONS(slot, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the attestations included in a specific block</p>
</dd>
<dt><a href="#BC$BLOCK_ATTESTERSLASHINGS">BC$BLOCK_ATTESTERSLASHINGS(slot, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the attester slashings included in a specific block</p>
</dd>
<dt><a href="#BC$BLOCK_DEPOSITS">BC$BLOCK_DEPOSITS(slot, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the deposits included in a specific block</p>
</dd>
<dt><a href="#BC$BLOCK_PROPOSERSLASHINGS">BC$BLOCK_PROPOSERSLASHINGS(slot, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the proposer slashings included in a specific block</p>
</dd>
<dt><a href="#BC$BLOCK_VOLUNTARYEXITS">BC$BLOCK_VOLUNTARYEXITS(slot, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the voluntary exits included in a specific block</p>
</dd>
<dt><a href="#BC$VALIDATORS_QUEUE">BC$VALIDATORS_QUEUE([fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the current validator queue</p>
</dd>
<dt><a href="#BC$EPOCH">BC$EPOCH(epoch, [fields])</a></dt>
<dd><p>Get epoch by number</p>
</dd>
<dt><a href="#BC$EPOCH_BLOCKS">BC$EPOCH_BLOCKS(epoch, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get epoch blocks by epoch number</p>
</dd>
<dt><a href="#BC$ETH1DEPOSIT">BC$ETH1DEPOSIT(txhash, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get an eth1 deposit by its eth1 transaction hash</p>
</dd>
<dt><a href="#BC$HEALTHZ">BC$HEALTHZ()</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Health of the explorer</p>
</dd>
<dt><a href="#BC$HEALTHZ_LOADBALANCER">BC$HEALTHZ_LOADBALANCER()</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Health of the explorer-api regarding having a healthy connection to the database</p>
</dd>
<dt><a href="#BC$VALIDATOR">BC$VALIDATOR(indexOrPubkey, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONEFFECTIVENESS">BC$VALIDATOR_ATTESTATIONEFFECTIVENESS(indexOrPubkey, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the current attestation-effectiveness of up to 100 validators. 1 = all attestations are included in the next possible block, &lt; 1 some attestations have been included after the next possible block.</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONEFFICIENCY">BC$VALIDATOR_ATTESTATIONEFFICIENCY(indexOrPubkey, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the current performance of up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONS">BC$VALIDATOR_ATTESTATIONS(indexOrPubkey, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get all attestations during the last 10 epochs for up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_BALANCEHISTORY">BC$VALIDATOR_BALANCEHISTORY(indexOrPubkey, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the balance history (last 100 epochs) of up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ETH1">BC$VALIDATOR_ETH1(eth1address, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get all validators that belong to an eth1 address</p>
</dd>
<dt><a href="#BC$VALIDATOR_LEADERBOARD">BC$VALIDATOR_LEADERBOARD([fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the current top 100 performing validators (using the income over the last 7 days)</p>
</dd>
<dt><a href="#BC$VALIDATOR_STATS">BC$VALIDATOR_STATS(validatorIndex, [fields], [offset], [limit])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get the daily validator stats by the validator index</p>
</dd>
</dl>

<a name="BC$BLOCK"></a>

## BC$BLOCK(slotOrHash, [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get block

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - attestationscount,attesterslashingscount,blockroot,depositscount,epoch,eth1data_blockhash,eth1data_depositcount,eth1data_depositroot,exec_base_fee_per_gas,exec_block_hash,exec_block_number,exec_extra_data,exec_fee_recipient,exec_gas_limit,exec_gas_used,exec_logs_bloom,exec_parent_hash,exec_random,exec_receipts_root,exec_state_root,exec_timestamp,exec_transactions_count,graffiti,graffiti_text,parentroot,proposer,proposerslashingscount,randaoreveal,signature,slot,stateroot,status,syncaggregate_bits,syncaggregate_participation,syncaggregate_signature,voluntaryexitscount  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slotOrHash | <code>SlotOrHash</code> \| <code>&#x27;latest&#x27;</code> |  | Block slot or root hash or the string latest |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=BC$BLOCK("latest", "*")
```
<a name="BC$BLOCK_ATTESTATIONS"></a>

## BC$BLOCK\_ATTESTATIONS(slot, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the attestations included in a specific block

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - aggregationbits,beaconblockroot,block_index,block_root,block_slot,committeeindex,signature,slot,source_epoch,source_root,target_epoch,target_root,validators  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$BLOCK_ATTESTATIONS(15316933, "*", 0, 3)
```
<a name="BC$BLOCK_ATTESTERSLASHINGS"></a>

## BC$BLOCK\_ATTESTERSLASHINGS(slot, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the attester slashings included in a specific block

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - attestationnumber_beaconblockroot,attestationnumber_index,attestationnumber_indices,attestationnumber_signature,attestationnumber_slot,attestationnumber_source_epoch,attestationnumber_source_root,attestationnumber_target_epoch,attestationnumber_target_root,block_index,block_root,block_slot  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$BLOCK_ATTESTERSLASHINGS(4758973, "*", 1)
```
<a name="BC$BLOCK_DEPOSITS"></a>

## BC$BLOCK\_DEPOSITS(slot, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the deposits included in a specific block

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - amount,block_index,block_root,block_slot,proof,publickey,signature,withdrawalcredentials  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$BLOCK_DEPOSITS(3148827, "*", 0, 3)
```
<a name="BC$BLOCK_PROPOSERSLASHINGS"></a>

## BC$BLOCK\_PROPOSERSLASHINGS(slot, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the proposer slashings included in a specific block

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - attestationnumber_beaconblockroot,attestationnumber_index,attestationnumber_indices,attestationnumber_signature,attestationnumber_slot,attestationnumber_source_epoch,attestationnumber_source_root,attestationnumber_target_epoch,attestationnumber_target_root,block_index,block_root,block_slot  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$BLOCK_PROPOSERSLASHINGS(4758973, "*", 0, 3)
```
<a name="BC$BLOCK_VOLUNTARYEXITS"></a>

## BC$BLOCK\_VOLUNTARYEXITS(slot, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the voluntary exits included in a specific block

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - unknown  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$BLOCK_VOLUNTARYEXITS(1234, "*", 0, 3)
```
<a name="BC$VALIDATORS_QUEUE"></a>

## BC$VALIDATORS\_QUEUE([fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get the current validator queue

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - beaconchain_entering,beaconchain_exiting,validatorscount  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=BC$VALIDATORS_QUEUE()
```
<a name="BC$EPOCH"></a>

## BC$EPOCH(epoch, [fields])
Get epoch by number

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| epoch | <code>number</code> \| <code>&#x27;latest&#x27;</code> |  | Epoch number or the string latest |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=BC$EPOCH("latest", "*")
```
<a name="BC$EPOCH_BLOCKS"></a>

## BC$EPOCH\_BLOCKS(epoch, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get epoch blocks by epoch number

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - attestationscount,attesterslashingscount,blockroot,depositscount,epoch,eth1data_blockhash,eth1data_depositcount,eth1data_depositroot,exec_base_fee_per_gas,exec_block_hash,exec_block_number,exec_extra_data,exec_fee_recipient,exec_gas_limit,exec_gas_used,exec_logs_bloom,exec_parent_hash,exec_random,exec_receipts_root,exec_state_root,exec_timestamp,exec_transactions_count,graffiti,graffiti_text,parentroot,proposer,proposerslashingscount,randaoreveal,signature,slot,stateroot,status,syncaggregate_bits,syncaggregate_participation,syncaggregate_signature,voluntaryexitscount  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| epoch | <code>number</code> \| <code>&#x27;latest&#x27;</code> |  | Epoch number or the string latest |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$EPOCH_BLOCKS("latest", "*", 0, 3)
```
<a name="BC$ETH1DEPOSIT"></a>

## BC$ETH1DEPOSIT(txhash, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get an eth1 deposit by its eth1 transaction hash

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - amount,block_number,block_ts,from_address,merkletree_index,publickey,removed,signature,tx_hash,tx_index,tx_input,valid_signature,withdrawal_credentials  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| txhash | <code>txhash</code> |  | Eth1 transaction hash |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$ETH1DEPOSIT("0x57f1b63337b12133d4b36e4d2fbb4f0b0599140ec18f531e58ca1aaacffd3487", "*", 0, 3)
```
<a name="BC$HEALTHZ"></a>

## BC$HEALTHZ() ⇒ <code>Array.&lt;string&gt;</code>
Health of the explorer

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - description  
**Example**  
```js
=BC$HEALTHZ()
```
<a name="BC$HEALTHZ_LOADBALANCER"></a>

## BC$HEALTHZ\_LOADBALANCER() ⇒ <code>Array.&lt;string&gt;</code>
Health of the explorer-api regarding having a healthy connection to the database

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - description  
**Example**  
```js
=BC$HEALTHZ_LOADBALANCER()
```
<a name="BC$VALIDATOR"></a>

## BC$VALIDATOR(indexOrPubkey, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get up to 100 validators

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - activationeligibilityepoch,activationepoch,balance,effectivebalance,exitepoch,lastattestationslot,name,pubkey,slashed,status,validatorindex,withdrawableepoch,withdrawalcredentials  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$VALIDATOR(209732, "*", 0, 3)
```
<a name="BC$VALIDATOR_ATTESTATIONEFFECTIVENESS"></a>

## BC$VALIDATOR\_ATTESTATIONEFFECTIVENESS(indexOrPubkey, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the current attestation-effectiveness of up to 100 validators. 1 = all attestations are included in the next possible block, < 1 some attestations have been included after the next possible block.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - validatorindex,attestation_efficiency  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$VALIDATOR_ATTESTATIONEFFECTIVENESS(209732, "*", 0, 3)
```
<a name="BC$VALIDATOR_ATTESTATIONEFFICIENCY"></a>

## BC$VALIDATOR\_ATTESTATIONEFFICIENCY(indexOrPubkey, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the current performance of up to 100 validators

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - attestationefficiency,validatorindex  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$VALIDATOR_ATTESTATIONEFFICIENCY(209732, "*", 0, 3)
```
<a name="BC$VALIDATOR_ATTESTATIONS"></a>

## BC$VALIDATOR\_ATTESTATIONS(indexOrPubkey, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get all attestations during the last 10 epochs for up to 100 validators

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - attesterslot,committeeindex,epoch,inclusionslot,status,validatorindex,week  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$VALIDATOR_ATTESTATIONS(209732, "*", 0, 3)
```
<a name="BC$VALIDATOR_BALANCEHISTORY"></a>

## BC$VALIDATOR\_BALANCEHISTORY(indexOrPubkey, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the balance history (last 100 epochs) of up to 100 validators

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - balance,effectivebalance,epoch,validatorindex,week  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$VALIDATOR_BALANCEHISTORY(209732, "*", 0, 3)
```
<a name="BC$VALIDATOR_ETH1"></a>

## BC$VALIDATOR\_ETH1(eth1address, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get all validators that belong to an eth1 address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - publickey,valid_signature,validatorindex  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eth1address | <code>EthereumAddress</code> |  | Eth1 address from which the validator deposits were sent |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$VALIDATOR_ETH1("0xf1b1a29331602f44d4f3921271596ca73e2dbf3c", "*", 0, 3)
```
<a name="BC$VALIDATOR_LEADERBOARD"></a>

## BC$VALIDATOR\_LEADERBOARD([fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the current top 100 performing validators (using the income over the last 7 days)

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - balance,performance1d,performance31d,performance365d,performance7d,rank7d,validatorIndex  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$VALIDATOR_LEADERBOARD("*", 0, 3)
```
<a name="BC$VALIDATOR_STATS"></a>

## BC$VALIDATOR\_STATS(validatorIndex, [fields], [offset], [limit]) ⇒ <code>Array.&lt;string&gt;</code>
Get the daily validator stats by the validator index

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - attester_slashings,day,deposits,deposits_amount,end_balance,end_effective_balance,max_balance,max_effective_balance,min_balance,min_effective_balance,missed_attestations,missed_blocks,missed_sync,orphaned_attestations,orphaned_blocks,orphaned_sync,participated_sync,proposed_blocks,proposer_slashings,start_balance,start_effective_balance,validatorindex  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| validatorIndex | <code>number</code> |  | Validator index |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$VALIDATOR_STATS(209732, "*", 0, 3)
```
