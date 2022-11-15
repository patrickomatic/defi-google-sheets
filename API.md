## Functions

<dl>
<dt><a href="#BC$BLOCK">BC$BLOCK(slotOrHash, fields, [offset], limit)</a></dt>
<dd><p>Get block</p>
</dd>
<dt><a href="#BC$BLOCK_ATTESTATIONS">BC$BLOCK_ATTESTATIONS(slot, fields, [offset], limit)</a></dt>
<dd><p>Get the attestations included in a specific block</p>
</dd>
<dt><a href="#BC$HEALTHZ">BC$HEALTHZ()</a></dt>
<dd><p>Health of the explorer</p>
</dd>
<dt><a href="#BC$HEALTHZ_LOADBALANCER">BC$HEALTHZ_LOADBALANCER()</a></dt>
<dd><p>Health of the explorer-api regarding having a healthy connection to the database</p>
</dd>
<dt><a href="#BC$VALIDATOR">BC$VALIDATOR(indexOrPubkey, fields, [offset], limit)</a></dt>
<dd><p>Get up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONEFFECTIVENESS">BC$VALIDATOR_ATTESTATIONEFFECTIVENESS(indexOrPubkey, fields, [offset], limit)</a></dt>
<dd><p>Get the current attestation-effectiveness of up to 100 validators. 1 = all attestations are included in the next possible block, &lt; 1 some attestations have been included after the next possible block.</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONEFFICIENCY">BC$VALIDATOR_ATTESTATIONEFFICIENCY(indexOrPubkey, fields, [offset], limit)</a></dt>
<dd><p>Get the current performance of up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONS">BC$VALIDATOR_ATTESTATIONS(indexOrPubkey, fields, [offset], limit)</a></dt>
<dd><p>Get all attestations during the last 10 epochs for up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_BALANCEHISTORY">BC$VALIDATOR_BALANCEHISTORY(indexOrPubkey, fields, [offset], limit)</a></dt>
<dd><p>Get the balance history (last 100 epochs) of up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ETH1">BC$VALIDATOR_ETH1(eth1address, fields, [offset], limit)</a></dt>
<dd><p>Get all validators that belong to an eth1 address</p>
</dd>
<dt><a href="#BC$VALIDATOR_LEADERBOARD">BC$VALIDATOR_LEADERBOARD(fields, [offset], limit)</a></dt>
<dd><p>Get the current top 100 performing validators (using the income over the last 7 days)</p>
</dd>
<dt><a href="#BC$VALIDATOR_STATS">BC$VALIDATOR_STATS(validatorIndex, fields, [offset], limit)</a></dt>
<dd><p>Get the daily validator stats by the validator index</p>
</dd>
<dt><a href="#BSTX">BSTX()</a></dt>
<dd></dd>
<dt><a href="#BSTX_HEX">BSTX_HEX()</a></dt>
<dd></dd>
<dt><a href="#BSTX_MERKLE_PROOF">BSTX_MERKLE_PROOF()</a></dt>
<dd></dd>
<dt><a href="#BSTX_MERKLEBLOCK_PROOF">BSTX_MERKLEBLOCK_PROOF()</a></dt>
<dd></dd>
<dt><a href="#BSTX_OUTSPEND">BSTX_OUTSPEND()</a></dt>
<dd></dd>
<dt><a href="#BSTX_OUTSPENDS">BSTX_OUTSPENDS()</a></dt>
<dd></dd>
<dt><a href="#BSTX_RAW">BSTX_RAW()</a></dt>
<dd></dd>
<dt><a href="#BSTX_STATUS">BSTX_STATUS()</a></dt>
<dd></dd>
<dt><a href="#ES$ACCOUNT_BALANCE">ES$ACCOUNT_BALANCE(address, tag)</a></dt>
<dd><p>Get Ether Balance for a Single Address</p>
</dd>
<dt><a href="#ES$ACCOUNT_BALANCEMULTI">ES$ACCOUNT_BALANCEMULTI(addresses, fields, tag)</a></dt>
<dd><p>Get Ether Balance for Multiple Addresses in a Single Call</p>
</dd>
<dt><a href="#ES$ACCOUNT_TOKENNFTTX">ES$ACCOUNT_TOKENNFTTX(address, contractaddress, startblock, endblock, page, [offset], sort)</a></dt>
<dd><p>Get &quot;Internal Transactions&quot; by Block Range</p>
</dd>
<dt><a href="#ES$ACCOUNT_TOKENTX">ES$ACCOUNT_TOKENTX(address, startblock, endblock, page, [offset], sort)</a></dt>
<dd><p>Get &#39;Internal Transactions&#39; by Transaction Hash</p>
</dd>
<dt><a href="#ES$ACCOUNT_TXLIST">ES$ACCOUNT_TXLIST(address, startblock, endblock, page, [offset], sort)</a></dt>
<dd><p>Get a list of &#39;Normal&#39; Transactions By Address</p>
</dd>
<dt><a href="#ES$ACCOUNT_TXLISTINTERNAL">ES$ACCOUNT_TXLISTINTERNAL(address, startblock, endblock, page, [offset], sort)</a></dt>
<dd><p>Get a list of &#39;Internal&#39; Transactions by Address</p>
</dd>
</dl>

<a name="BC$BLOCK"></a>

## BC$BLOCK(slotOrHash, fields, [offset], limit)
Get block

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slotOrHash | <code>SlotOrHash</code> \| <code>&#x27;latest&#x27;</code> |  | Block slot or root hash or the string latest |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BC$BLOCK_ATTESTATIONS"></a>

## BC$BLOCK\_ATTESTATIONS(slot, fields, [offset], limit)
Get the attestations included in a specific block

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| slot | <code>number</code> |  | Block slot |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BC$HEALTHZ"></a>

## BC$HEALTHZ()
Health of the explorer

**Kind**: global function  
**Customfunction**:   
<a name="BC$HEALTHZ_LOADBALANCER"></a>

## BC$HEALTHZ\_LOADBALANCER()
Health of the explorer-api regarding having a healthy connection to the database

**Kind**: global function  
**Customfunction**:   
<a name="BC$VALIDATOR"></a>

## BC$VALIDATOR(indexOrPubkey, fields, [offset], limit)
Get up to 100 validators

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_ATTESTATIONEFFECTIVENESS"></a>

## BC$VALIDATOR\_ATTESTATIONEFFECTIVENESS(indexOrPubkey, fields, [offset], limit)
Get the current attestation-effectiveness of up to 100 validators. 1 = all attestations are included in the next possible block, < 1 some attestations have been included after the next possible block.

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_ATTESTATIONEFFICIENCY"></a>

## BC$VALIDATOR\_ATTESTATIONEFFICIENCY(indexOrPubkey, fields, [offset], limit)
Get the current performance of up to 100 validators

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_ATTESTATIONS"></a>

## BC$VALIDATOR\_ATTESTATIONS(indexOrPubkey, fields, [offset], limit)
Get all attestations during the last 10 epochs for up to 100 validators

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_BALANCEHISTORY"></a>

## BC$VALIDATOR\_BALANCEHISTORY(indexOrPubkey, fields, [offset], limit)
Get the balance history (last 100 epochs) of up to 100 validators

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| indexOrPubkey | <code>IndexOrPubkey</code> \| <code>Array.&lt;IndexOrPubkey&gt;</code> |  | Up to 100 validator indicesOrPubkeys, comma separated |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_ETH1"></a>

## BC$VALIDATOR\_ETH1(eth1address, fields, [offset], limit)
Get all validators that belong to an eth1 address

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eth1address | <code>EthereumAddress</code> |  | Eth1 address from which the validator deposits were sent |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_LEADERBOARD"></a>

## BC$VALIDATOR\_LEADERBOARD(fields, [offset], limit)
Get the current top 100 performing validators (using the income over the last 7 days)

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BC$VALIDATOR_STATS"></a>

## BC$VALIDATOR\_STATS(validatorIndex, fields, [offset], limit)
Get the daily validator stats by the validator index

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| validatorIndex | <code>number</code> |  | Validator index |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| [offset] | <code>number</code> | <code>0</code> | Return records offset by this amount |
| limit | <code>number</code> |  | Return at most this many results |

<a name="BSTX"></a>

## BSTX()
**Kind**: global function  
**Customfunction**:   
<a name="BSTX_HEX"></a>

## BSTX\_HEX()
**Kind**: global function  
**Customfunction**:   
<a name="BSTX_MERKLE_PROOF"></a>

## BSTX\_MERKLE\_PROOF()
**Kind**: global function  
**Customfunction**:   
<a name="BSTX_MERKLEBLOCK_PROOF"></a>

## BSTX\_MERKLEBLOCK\_PROOF()
**Kind**: global function  
**Customfunction**:   
<a name="BSTX_OUTSPEND"></a>

## BSTX\_OUTSPEND()
**Kind**: global function  
**Customfunction**:   
<a name="BSTX_OUTSPENDS"></a>

## BSTX\_OUTSPENDS()
**Kind**: global function  
**Customfunction**:   
<a name="BSTX_RAW"></a>

## BSTX\_RAW()
**Kind**: global function  
**Customfunction**:   
<a name="BSTX_STATUS"></a>

## BSTX\_STATUS()
**Kind**: global function  
**Customfunction**:   
<a name="ES$ACCOUNT_BALANCE"></a>

## ES$ACCOUNT\_BALANCE(address, tag)
Get Ether Balance for a Single Address

**Kind**: global function  
**Customfunction**:   

| Param | Type |
| --- | --- |
| address | <code>EthereumAddress</code> | 
| tag | <code>&quot;earliest&quot;</code> \| <code>&quot;pending&quot;</code> \| <code>&quot;latest&quot;</code> | 

<a name="ES$ACCOUNT_BALANCEMULTI"></a>

## ES$ACCOUNT\_BALANCEMULTI(addresses, fields, tag)
Get Ether Balance for Multiple Addresses in a Single Call

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| addresses | <code>Array.&lt;EthereumAddress&gt;</code> |  | A range or comma separated Ethereum addresses |
| fields | <code>FieldsOrAll</code> | <code>*</code> | * |
| tag | <code>fields</code> |  |  |
|  | <code>tag</code> |  |  |

<a name="ES$ACCOUNT_TOKENNFTTX"></a>

## ES$ACCOUNT\_TOKENNFTTX(address, contractaddress, startblock, endblock, page, [offset], sort)
Get "Internal Transactions" by Block Range

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default |
| --- | --- | --- |
| address | <code>EthereumAddress</code> |  | 
| contractaddress | <code>contractaddress</code> |  | 
| startblock | <code>number</code> |  | 
| endblock | <code>number</code> |  | 
| page | <code>number</code> |  | 
| [offset] | <code>number</code> | <code>0</code> | 
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | 

<a name="ES$ACCOUNT_TOKENTX"></a>

## ES$ACCOUNT\_TOKENTX(address, startblock, endblock, page, [offset], sort)
Get 'Internal Transactions' by Transaction Hash

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default |
| --- | --- | --- |
| address | <code>EthereumAddress</code> |  | 
| startblock | <code>number</code> |  | 
| endblock | <code>number</code> |  | 
| page | <code>number</code> |  | 
| [offset] | <code>number</code> | <code>0</code> | 
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | 

<a name="ES$ACCOUNT_TXLIST"></a>

## ES$ACCOUNT\_TXLIST(address, startblock, endblock, page, [offset], sort)
Get a list of 'Normal' Transactions By Address

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default |
| --- | --- | --- |
| address | <code>EthereumAddress</code> |  | 
| startblock | <code>number</code> |  | 
| endblock | <code>number</code> |  | 
| page | <code>number</code> |  | 
| [offset] | <code>number</code> | <code>0</code> | 
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | 

<a name="ES$ACCOUNT_TXLISTINTERNAL"></a>

## ES$ACCOUNT\_TXLISTINTERNAL(address, startblock, endblock, page, [offset], sort)
Get a list of 'Internal' Transactions by Address

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| startblock | <code>number</code> |  |  |
| endblock | <code>number</code> |  |  |
| page | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | * |

Done in 0.76s.
