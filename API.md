## Functions

<dl>
<dt><a href="#BC$BLOCK">BC$BLOCK()</a></dt>
<dd></dd>
<dt><a href="#BC$BLOCK_ATTESTATIONS">BC$BLOCK_ATTESTATIONS(Block, *, Return, Return)</a></dt>
<dd><p>Get the attestations included in a specific block</p>
</dd>
<dt><a href="#BC$HEALTHZ">BC$HEALTHZ()</a></dt>
<dd><p>Health of the explorer</p>
</dd>
<dt><a href="#BC$HEALTHZ_LOADBALANCER">BC$HEALTHZ_LOADBALANCER()</a></dt>
<dd><p>Health of the explorer-api regarding having a healthy connection to the database</p>
</dd>
<dt><a href="#BC$VALIDATOR">BC$VALIDATOR(Up, *, Return, Return)</a></dt>
<dd><p>Get up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONEFFECTIVENESS">BC$VALIDATOR_ATTESTATIONEFFECTIVENESS(Up, *, Return, Return)</a></dt>
<dd><p>Get the current attestation-effectiveness of up to 100 validators. 1 = all attestations are included in the next possible block, &lt; 1 some attestations have been included after the next possible block.</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONEFFICIENCY">BC$VALIDATOR_ATTESTATIONEFFICIENCY(Up, *, Return, Return)</a></dt>
<dd><p>Get the current performance of up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ATTESTATIONS">BC$VALIDATOR_ATTESTATIONS(Up, *, Return, Return)</a></dt>
<dd><p>Get all attestations during the last 10 epochs for up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_BALANCEHISTORY">BC$VALIDATOR_BALANCEHISTORY(Up, *, Return, Return)</a></dt>
<dd><p>Get the balance history (last 100 epochs) of up to 100 validators</p>
</dd>
<dt><a href="#BC$VALIDATOR_ETH1">BC$VALIDATOR_ETH1(Eth1, *, Return, Return)</a></dt>
<dd><p>Get all validators that belong to an eth1 address</p>
</dd>
<dt><a href="#BC$VALIDATOR_LEADERBOARD">BC$VALIDATOR_LEADERBOARD(*, Return, Return)</a></dt>
<dd><p>Get the current top 100 performing validators (using the income over the last 7 days)</p>
</dd>
<dt><a href="#BC$VALIDATOR_STATS">BC$VALIDATOR_STATS(Validator, *, Return, Return)</a> ⇒</dt>
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
<dt><a href="#ES$ACCOUNT_TOKENNFTTX">ES$ACCOUNT_TOKENNFTTX(address, contractaddress, startblock, endblock, page, offset)</a></dt>
<dd><p>Get &quot;Internal Transactions&quot; by Block Range</p>
</dd>
<dt><a href="#ES$ACCOUNT_TOKENTX">ES$ACCOUNT_TOKENTX(address, contractAddress, startblock, endblock, page, offset)</a></dt>
<dd><p>Get &#39;Internal Transactions&#39; by Transaction Hash</p>
</dd>
<dt><a href="#ES$ACCOUNT_TXLIST">ES$ACCOUNT_TXLIST(address, startblock, endblock, page, offset, sort)</a></dt>
<dd><p>Get a list of &#39;Normal&#39; Transactions By Address</p>
</dd>
<dt><a href="#ES$ACCOUNT_TXLISTINTERNAL">ES$ACCOUNT_TXLISTINTERNAL(address, startblock, endblock, page, offset, sort)</a></dt>
<dd><p>Get a list of &#39;Internal&#39; Transactions by Address</p>
</dd>
</dl>

<a name="BC$BLOCK"></a>

## BC$BLOCK()
**Kind**: global function  
**Customfunction**:   
<a name="BC$BLOCK_ATTESTATIONS"></a>

## BC$BLOCK\_ATTESTATIONS(Block, *, Return, Return)
Get the attestations included in a specific block

**Kind**: global function  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| Block | <code>slot</code> | slot |
| * | <code>fields</code> |  |
| Return | <code>limit</code> | at most this many results |
| Return | <code>offset</code> | records offset by this amount |

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

## BC$VALIDATOR(Up, *, Return, Return)
Get up to 100 validators

**Kind**: global function  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| Up | <code>indexOrPubkey</code> | to 100 validator indicesOrPubkeys, comma separated |
| * | <code>fields</code> |  |
| Return | <code>offset</code> | records offset by this amount |
| Return | <code>limit</code> | at most this many results |

<a name="BC$VALIDATOR_ATTESTATIONEFFECTIVENESS"></a>

## BC$VALIDATOR\_ATTESTATIONEFFECTIVENESS(Up, *, Return, Return)
Get the current attestation-effectiveness of up to 100 validators. 1 = all attestations are included in the next possible block, < 1 some attestations have been included after the next possible block.

**Kind**: global function  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| Up | <code>indexOrPubkey</code> | to 100 validator indicesOrPubkeys, comma separated |
| * | <code>fields</code> |  |
| Return | <code>offset</code> | records offset by this amount |
| Return | <code>limit</code> | at most this many results |

<a name="BC$VALIDATOR_ATTESTATIONEFFICIENCY"></a>

## BC$VALIDATOR\_ATTESTATIONEFFICIENCY(Up, *, Return, Return)
Get the current performance of up to 100 validators

**Kind**: global function  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| Up | <code>indexOrPubkey</code> | to 100 validator indicesOrPubkeys, comma separated |
| * | <code>fields</code> |  |
| Return | <code>offset</code> | records offset by this amount |
| Return | <code>limit</code> | at most this many results |

<a name="BC$VALIDATOR_ATTESTATIONS"></a>

## BC$VALIDATOR\_ATTESTATIONS(Up, *, Return, Return)
Get all attestations during the last 10 epochs for up to 100 validators

**Kind**: global function  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| Up | <code>indexOrPubkey</code> | to 100 validator indicesOrPubkeys, comma separated |
| * | <code>fields</code> |  |
| Return | <code>offset</code> | records offset by this amount |
| Return | <code>limit</code> | at most this many results |

<a name="BC$VALIDATOR_BALANCEHISTORY"></a>

## BC$VALIDATOR\_BALANCEHISTORY(Up, *, Return, Return)
Get the balance history (last 100 epochs) of up to 100 validators

**Kind**: global function  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| Up | <code>indexOrPubkey</code> | to 100 validator indicesOrPubkeys, comma separated |
| * | <code>fields</code> |  |
| Return | <code>offset</code> | records offset by this amount |
| Return | <code>limit</code> | at most this many results |

<a name="BC$VALIDATOR_ETH1"></a>

## BC$VALIDATOR\_ETH1(Eth1, *, Return, Return)
Get all validators that belong to an eth1 address

**Kind**: global function  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| Eth1 | <code>eth1address</code> | address from which the validator deposits were sent |
| * | <code>fields</code> |  |
| Return | <code>offset</code> | records offset by this amount |
| Return | <code>limit</code> | at most this many results |

<a name="BC$VALIDATOR_LEADERBOARD"></a>

## BC$VALIDATOR\_LEADERBOARD(*, Return, Return)
Get the current top 100 performing validators (using the income over the last 7 days)

**Kind**: global function  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| * | <code>fields</code> |  |
| Return | <code>offset</code> | records offset by this amount |
| Return | <code>limit</code> | at most this many results |

<a name="BC$VALIDATOR_STATS"></a>

## BC$VALIDATOR\_STATS(Validator, *, Return, Return) ⇒
Get the daily validator stats by the validator index

**Kind**: global function  
**Returns**: Rows inserted containing daily balance data  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| Validator | <code>validatorIndex</code> | index |
| * | <code>fields</code> |  |
| Return | <code>offset</code> | records offset by this amount |
| Return | <code>limit</code> | at most this many results |

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
| address | <code>address</code> | 
| tag | <code>tag</code> | 

<a name="ES$ACCOUNT_BALANCEMULTI"></a>

## ES$ACCOUNT\_BALANCEMULTI(addresses, fields, tag)
Get Ether Balance for Multiple Addresses in a Single Call

**Kind**: global function  
**Customfunction**:   

| Param | Type | Default |
| --- | --- | --- |
| addresses | <code>addresses</code> |  | 
| fields | <code>fields</code> | <code>*</code> | 
| tag | <code>tag</code> |  | 

<a name="ES$ACCOUNT_TOKENNFTTX"></a>

## ES$ACCOUNT\_TOKENNFTTX(address, contractaddress, startblock, endblock, page, offset)
Get "Internal Transactions" by Block Range

**Kind**: global function  
**Customfunction**:   

| Param | Type |
| --- | --- |
| address | <code>address</code> | 
| contractaddress | <code>startblock</code> | 
| startblock | <code>endblock</code> | 
| endblock | <code>page</code> | 
| page | <code>offset</code> | 
| offset | <code>sort</code> | 

<a name="ES$ACCOUNT_TOKENTX"></a>

## ES$ACCOUNT\_TOKENTX(address, contractAddress, startblock, endblock, page, offset)
Get 'Internal Transactions' by Transaction Hash

**Kind**: global function  
**Customfunction**:   

| Param | Type |
| --- | --- |
| address | <code>address</code> | 
| contractAddress | <code>startblock</code> | 
| startblock | <code>endblock</code> | 
| endblock | <code>page</code> | 
| page | <code>offset</code> | 
| offset | <code>sort</code> | 

<a name="ES$ACCOUNT_TXLIST"></a>

## ES$ACCOUNT\_TXLIST(address, startblock, endblock, page, offset, sort)
Get a list of 'Normal' Transactions By Address

**Kind**: global function  
**Customfunction**:   

| Param | Type |
| --- | --- |
| address | <code>address</code> | 
| startblock | <code>startblock</code> | 
| endblock | <code>endblock</code> | 
| page | <code>page</code> | 
| offset | <code>offset</code> | 
| sort | <code>sort</code> | 

<a name="ES$ACCOUNT_TXLISTINTERNAL"></a>

## ES$ACCOUNT\_TXLISTINTERNAL(address, startblock, endblock, page, offset, sort)
Get a list of 'Internal' Transactions by Address

**Kind**: global function  
**Customfunction**:   

| Param | Type |
| --- | --- |
| address | <code>address</code> | 
| startblock | <code>startblock</code> | 
| endblock | <code>endblock</code> | 
| page | <code>page</code> | 
| offset | <code>offset</code> | 
| sort | <code>sort</code> | 

Done in 0.27s.
