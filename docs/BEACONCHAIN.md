## Functions

<dl>
<dt><a href="#BC$BLOCK">BC$BLOCK(slotOrHash, [fields])</a></dt>
<dd><p>Get block</p>
</dd>
<dt><a href="#BC$BLOCK_ATTESTATIONS">BC$BLOCK_ATTESTATIONS(slot, [fields], [offset], [limit])</a></dt>
<dd><p>Get the attestations included in a specific block</p>
</dd>
<dt><a href="#BC$BLOCK_ATTESTERSLASHINGS">BC$BLOCK_ATTESTERSLASHINGS(slot, [fields], [offset], [limit])</a></dt>
<dd><p>Get the attester slashings included in a specific block</p>
</dd>
<dt><a href="#BC$BLOCK_DEPOSITS">BC$BLOCK_DEPOSITS(slot, [fields], [offset], [limit])</a></dt>
<dd><p>Get the deposits included in a specific block</p>
</dd>
<dt><a href="#BC$BLOCK_PROPOSERSLASHINGS">BC$BLOCK_PROPOSERSLASHINGS(slot, [fields], [offset], [limit])</a></dt>
<dd><p>Get the proposer slashings included in a specific block</p>
</dd>
<dt><a href="#BC$BLOCK_VOLUNTARYEXITS">BC$BLOCK_VOLUNTARYEXITS(slot, [fields], [offset], [limit])</a></dt>
<dd><p>Get the voluntary exits included in a specific block</p>
</dd>
<dt><a href="#BC$VALIDATORS_QUEUE">BC$VALIDATORS_QUEUE([fields])</a></dt>
<dd><p>Get the current validator queue</p>
</dd>
<dt><a href="#BC$EPOCH">BC$EPOCH(epoch, [fields])</a></dt>
<dd><p>Get epoch by number</p>
</dd>
<dt><a href="#BC$EPOCH_BLOCKS">BC$EPOCH_BLOCKS(epoch, [fields], [offset], [limit])</a></dt>
<dd><p>Get epoch blocks by epoch number</p>
</dd>
<dt><a href="#BC$ETH1DEPOSIT">BC$ETH1DEPOSIT(txhash, [fields], [offset], [limit])</a></dt>
<dd><p>Get an eth1 deposit by its eth1 transaction hash</p>
</dd>
<dt><a href="#BC$HEALTHZ">BC$HEALTHZ()</a></dt>
<dd><p>Health of the explorer</p>
</dd>
<dt><a href="#BC$HEALTHZ_LOADBALANCER">BC$HEALTHZ_LOADBALANCER()</a></dt>
<dd><p>Health of the explorer-api regarding having a healthy connection to the database</p>
</dd>
<dt><a href="#BC$VALIDATOR">BC$VALIDATOR(indexOrPubkey, [fields], [offset], [limit])</a></dt>
<dd><p>Get up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONEFFECTIVENESS">BC$VALIDATOR_ATTESTATIONEFFECTIVENESS(indexOrPubkey, [fields], [offset], [limit])</a></dt>
<dd><p>Get the current attestation-effectiveness of up to 100 validators. 1 = all attestations are included in the next possible block, &lt; 1 some attestations have been included after the next possible block.</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONEFFICIENCY">BC$VALIDATOR_ATTESTATIONEFFICIENCY(indexOrPubkey, [fields], [offset], [limit])</a></dt>
<dd><p>Get the current performance of up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONS">BC$VALIDATOR_ATTESTATIONS(indexOrPubkey, [fields], [offset], [limit])</a></dt>
<dd><p>Get all attestations during the last 10 epochs for up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_BALANCEHISTORY">BC$VALIDATOR_BALANCEHISTORY(indexOrPubkey, [fields], [offset], [limit])</a></dt>
<dd><p>Get the balance history (last 100 epochs) of up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ETH1">BC$VALIDATOR_ETH1(eth1address, [fields], [offset], [limit])</a></dt>
<dd><p>Get all validators that belong to an eth1 address</p>
</dd>
<dt><a href="#BC$VALIDATOR_LEADERBOARD">BC$VALIDATOR_LEADERBOARD([fields], [offset], [limit])</a></dt>
<dd><p>Get the current top 100 performing validators (using the income over the last 7 days)</p>
</dd>
<dt><a href="#BC$VALIDATOR_STATS">BC$VALIDATOR_STATS(validatorIndex, [fields], [offset], [limit])</a></dt>
<dd><p>Get the daily validator stats by the validator index</p>
</dd>
</dl>

<a name="BC$BLOCK"></a>

## BC$BLOCK(slotOrHash, [fields])
Get block

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slotOrHash | <code>SlotOrHash</code> \| <code>&#x27;latest&#x27;</code> |  | Block slot or root hash or the string latest |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

<a name="BC$BLOCK_ATTESTATIONS"></a>

## BC$BLOCK\_ATTESTATIONS(slot, [fields], [offset], [limit])
Get the attestations included in a specific block

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

<a name="BC$BLOCK_ATTESTERSLASHINGS"></a>

## BC$BLOCK\_ATTESTERSLASHINGS(slot, [fields], [offset], [limit])
Get the attester slashings included in a specific block

**Kind**: global function  

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

## BC$BLOCK\_DEPOSITS(slot, [fields], [offset], [limit])
Get the deposits included in a specific block

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$BLOCK_DEPOSITS(3148827, "*", 0, 5)
```
<a name="BC$BLOCK_PROPOSERSLASHINGS"></a>

## BC$BLOCK\_PROPOSERSLASHINGS(slot, [fields], [offset], [limit])
Get the proposer slashings included in a specific block

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$BLOCK_PROPOSERSLASHINGS(4758973, "*", 0, 5)
```
<a name="BC$BLOCK_VOLUNTARYEXITS"></a>

## BC$BLOCK\_VOLUNTARYEXITS(slot, [fields], [offset], [limit])
Get the voluntary exits included in a specific block

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$BLOCK_VOLUNTARYEXITS(1234, "*", 0, 5)
```
<a name="BC$VALIDATORS_QUEUE"></a>

## BC$VALIDATORS\_QUEUE([fields])
Get the current validator queue

**Kind**: global function  

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

## BC$EPOCH\_BLOCKS(epoch, [fields], [offset], [limit])
Get epoch blocks by epoch number

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| epoch | <code>number</code> \| <code>&#x27;latest&#x27;</code> |  | Epoch number or the string latest |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$EPOCH_BLOCKS("latest", "*", 0, 5)
```
<a name="BC$ETH1DEPOSIT"></a>

## BC$ETH1DEPOSIT(txhash, [fields], [offset], [limit])
Get an eth1 deposit by its eth1 transaction hash

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| txhash | <code>txhash</code> |  | Eth1 transaction hash |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

**Example**  
```js
=BC$ETH1DEPOSIT("0x57f1b63337b12133d4b36e4d2fbb4f0b0599140ec18f531e58ca1aaacffd3487", "*", 0, 5)
```
<a name="BC$HEALTHZ"></a>

## BC$HEALTHZ()
Health of the explorer

**Kind**: global function  
<a name="BC$HEALTHZ_LOADBALANCER"></a>

## BC$HEALTHZ\_LOADBALANCER()
Health of the explorer-api regarding having a healthy connection to the database

**Kind**: global function  
<a name="BC$VALIDATOR"></a>

## BC$VALIDATOR(indexOrPubkey, [fields], [offset], [limit])
Get up to 100 validators

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_ATTESTATIONEFFECTIVENESS"></a>

## BC$VALIDATOR\_ATTESTATIONEFFECTIVENESS(indexOrPubkey, [fields], [offset], [limit])
Get the current attestation-effectiveness of up to 100 validators. 1 = all attestations are included in the next possible block, < 1 some attestations have been included after the next possible block.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_ATTESTATIONEFFICIENCY"></a>

## BC$VALIDATOR\_ATTESTATIONEFFICIENCY(indexOrPubkey, [fields], [offset], [limit])
Get the current performance of up to 100 validators

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_ATTESTATIONS"></a>

## BC$VALIDATOR\_ATTESTATIONS(indexOrPubkey, [fields], [offset], [limit])
Get all attestations during the last 10 epochs for up to 100 validators

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_BALANCEHISTORY"></a>

## BC$VALIDATOR\_BALANCEHISTORY(indexOrPubkey, [fields], [offset], [limit])
Get the balance history (last 100 epochs) of up to 100 validators

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_ETH1"></a>

## BC$VALIDATOR\_ETH1(eth1address, [fields], [offset], [limit])
Get all validators that belong to an eth1 address

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eth1address | <code>EthereumAddress</code> |  | Eth1 address from which the validator deposits were sent |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_LEADERBOARD"></a>

## BC$VALIDATOR\_LEADERBOARD([fields], [offset], [limit])
Get the current top 100 performing validators (using the income over the last 7 days)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_STATS"></a>

## BC$VALIDATOR\_STATS(validatorIndex, [fields], [offset], [limit])
Get the daily validator stats by the validator index

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| validatorIndex | <code>number</code> |  | Validator index |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [offset] | <code>number</code> |  | Return results starting at this offset |
| [limit] | <code>number</code> |  | Return at most this many results |

