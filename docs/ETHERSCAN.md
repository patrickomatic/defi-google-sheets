## Functions

<dl>
<dt><a href="#ES$BALANCE">ES$BALANCE(address, tag)</a> ⇒ <code>Wei</code></dt>
<dd><p>Get Ether Balance for a Single Address</p>
</dd>
<dt><a href="#ES$BALANCEMULTI">ES$BALANCEMULTI(addresses, tag, [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Ether Balance for Multiple Addresses in a Single Call</p>
</dd>
<dt><a href="#ES$GETMINEDBLOCKS">ES$GETMINEDBLOCKS(address, blocktype, [fields], [page], [offset])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get list of Blocks Mined by Address</p>
</dd>
<dt><a href="#ES$TOKENNFTTX">ES$TOKENNFTTX(address, contractaddress, [page], [offset], [sort], [startblock], [endblock])</a></dt>
<dd><p>Get &quot;Internal Transactions&quot; by Block Range</p>
</dd>
<dt><a href="#ES$TOKENTX">ES$TOKENTX(address, [startblock], [endblock], [page], [offset], [sort])</a> ⇒</dt>
<dd><p>Get &#39;Internal Transactions&#39; by Transaction Hash</p>
</dd>
<dt><a href="#ES$TXLIST">ES$TXLIST(address, [fields], [page], [offset], [sort], [startblock], [endblock])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;Normal&#39; Transactions By Address</p>
</dd>
<dt><a href="#ES$TXLISTINTERNAL_BYADDRESS">ES$TXLISTINTERNAL_BYADDRESS(address, [fields], [page], [offset], [sort], [startblock], [endblock])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;Internal&#39; Transactions by Address</p>
</dd>
<dt><a href="#ES$TXLISTINTERNAL_BYBLOCKRANGE">ES$TXLISTINTERNAL_BYBLOCKRANGE(startblock, endblock, [fields], [page], [offset], [sort])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get &quot;Internal Transactions&quot; by Block Range</p>
</dd>
<dt><a href="#ES$TXLISTINTERNAL_BYTRANSACTIONHASH">ES$TXLISTINTERNAL_BYTRANSACTIONHASH(txhash, [fields], [page], [offset], [sort], [startblock], [endblock])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get &#39;Internal Transactions&#39; by Transaction Hash</p>
</dd>
<dt><a href="#ES$GETBLOCKCOUNTDOWN">ES$GETBLOCKCOUNTDOWN([blockno], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Estimated Block Countdown Time by BlockNo</p>
</dd>
<dt><a href="#ES$GETBLOCKNOBYTIME">ES$GETBLOCKNOBYTIME(timestamp, closest)</a> ⇒ <code>number</code></dt>
<dd><p>Get Block Number by Timestamp</p>
</dd>
<dt><a href="#ES$GETBLOCKREWARD">ES$GETBLOCKREWARD([blockno], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Block And Uncle Rewards by BlockNo</p>
</dd>
<dt><a href="#ES$DAILYAVGBLOCKSIZE">ES$DAILYAVGBLOCKSIZE([startdate], [enddate], [sort], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Average Block Size</p>
</dd>
<dt><a href="#ES$DAILYAVGBLOCKTIME">ES$DAILYAVGBLOCKTIME([startdate], [enddate], [sort], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Average Time for A Block to be Included in the Ethereum Blockchain</p>
</dd>
<dt><a href="#ES$DAILYBLKCOUNT">ES$DAILYBLKCOUNT([startdate], [enddate], [sort], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Block Count and Rewards</p>
</dd>
<dt><a href="#ES$DAILYBLOCKREWARDS">ES$DAILYBLOCKREWARDS([startdate], [enddate], [sort])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Block Rewards</p>
</dd>
<dt><a href="#ES$DAILYUNCLEBLKCOUNT">ES$DAILYUNCLEBLKCOUNT([startdate], [enddate], [sort], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Uncle Block Count and Rewards</p>
</dd>
</dl>

<a name="ES$BALANCE"></a>

## ES$BALANCE(address, tag) ⇒ <code>Wei</code>
Get Ether Balance for a Single Address

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>EthereumAddress</code> |  |
| tag | <code>number</code> \| <code>&quot;earliest&quot;</code> \| <code>&quot;pending&quot;</code> \| <code>&quot;latest&quot;</code> | the integer pre-defined block parameter, either earliest, pending or latest |

**Example**  
```js
=ES$BALANCE("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", "latest")
```
<a name="ES$BALANCEMULTI"></a>

## ES$BALANCEMULTI(addresses, tag, [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Ether Balance for Multiple Addresses in a Single Call

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - account,balance  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| addresses | <code>Array.&lt;EthereumAddress&gt;</code> |  | A range or comma separated Ethereum addresses |
| tag | <code>number</code> \| <code>&quot;earliest&quot;</code> \| <code>&quot;pending&quot;</code> \| <code>&quot;latest&quot;</code> |  | the integer pre-defined block parameter, either earliest, pending or latest |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$BALANCEMULTI("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B,0x71C7656EC7ab88b098defB751B7401B5f6d8976F", "*", "latest")
```
<a name="ES$GETMINEDBLOCKS"></a>

## ES$GETMINEDBLOCKS(address, blocktype, [fields], [page], [offset]) ⇒ <code>Array.&lt;string&gt;</code>
Get list of Blocks Mined by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockNumber,timeStamp,blockReward  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| blocktype | <code>&quot;blocks&quot;</code> \| <code>&quot;uncles&quot;</code> |  | the string pre-defined block type, either blocks for canonical blocks or uncles for uncle blocks only |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |

**Example**  
```js
=ES$GETMINEDBLOCKS("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", "*", 0, 3)
```
<a name="ES$TOKENNFTTX"></a>

## ES$TOKENNFTTX(address, contractaddress, [page], [offset], [sort], [startblock], [endblock])
Get "Internal Transactions" by Block Range

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| contractaddress | <code>EthereumAddress</code> |  |  |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [startblock] | <code>number</code> |  |  |
| [endblock] | <code>number</code> |  |  |

<a name="ES$TOKENTX"></a>

## ES$TOKENTX(address, [startblock], [endblock], [page], [offset], [sort]) ⇒
Get 'Internal Transactions' by Transaction Hash

**Kind**: global function  
**Returns**: XXX  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| [startblock] | <code>number</code> |  |  |
| [endblock] | <code>number</code> |  |  |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$TOKENTX()
```
<a name="ES$TXLIST"></a>

## ES$TXLIST(address, [fields], [page], [offset], [sort], [startblock], [endblock]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'Normal' Transactions By Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,functionName,gas,gasPrice,gasUsed,hash,input,isError,methodId,nonce,timeStamp,to,transactionIndex,txreceipt_status,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [startblock] | <code>number</code> |  |  |
| [endblock] | <code>number</code> |  |  |

**Example**  
```js
=ES$TXLIST("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", "*", 0, 3)
```
<a name="ES$TXLISTINTERNAL_BYADDRESS"></a>

## ES$TXLISTINTERNAL\_BYADDRESS(address, [fields], [page], [offset], [sort], [startblock], [endblock]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'Internal' Transactions by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockNumber,timeStamp,hash,from,to,value,contractAddress,input,type,gas,gasUsed,traceId,isError,errCode  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [startblock] | <code>number</code> |  |  |
| [endblock] | <code>number</code> |  |  |

**Example**  
```js
=ES$TXLISTINTERNAL_BYADDRESS("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", "*", 0, 3)
```
<a name="ES$TXLISTINTERNAL_BYBLOCKRANGE"></a>

## ES$TXLISTINTERNAL\_BYBLOCKRANGE(startblock, endblock, [fields], [page], [offset], [sort]) ⇒ <code>Array.&lt;string&gt;</code>
Get "Internal Transactions" by Block Range

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockNumber,timeStamp,hash,from,to,value,contractAddress,input,type,gas,gasUsed,traceId,isError,errCode  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| startblock | <code>number</code> |  |  |
| endblock | <code>number</code> |  |  |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$TXLISTINTERNAL_BYBLOCKRANGE("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", "*", 0, 3)
```
<a name="ES$TXLISTINTERNAL_BYTRANSACTIONHASH"></a>

## ES$TXLISTINTERNAL\_BYTRANSACTIONHASH(txhash, [fields], [page], [offset], [sort], [startblock], [endblock]) ⇒ <code>Array.&lt;string&gt;</code>
Get 'Internal Transactions' by Transaction Hash

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockNumber,timeStamp,hash,from,to,value,contractAddress,input,type,gas,gasUsed,traceId,isError,errCode  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| txhash | <code>Hex</code> |  | the string representing the transaction hash to check for internal transactions |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [startblock] | <code>number</code> |  |  |
| [endblock] | <code>number</code> |  |  |

**Example**  
```js
=ES$TXLISTINTERNAL_BYTRANSACTIONHASH("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", "*", 0, 3)
```
<a name="ES$GETBLOCKCOUNTDOWN"></a>

## ES$GETBLOCKCOUNTDOWN([blockno], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Estimated Block Countdown Time by BlockNo

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - CurrentBlock,CountdownBlock,RemainingBlock  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [blockno] | <code>number</code> |  | the integer block number |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$GETBLOCKCOUNTDOWN(16701588)
```
<a name="ES$GETBLOCKNOBYTIME"></a>

## ES$GETBLOCKNOBYTIME(timestamp, closest) ⇒ <code>number</code>
Get Block Number by Timestamp

**Kind**: global function  
**Returns**: <code>number</code> - block number  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | the integer representing the Unix timestamp in seconds |
| closest | <code>&quot;before&quot;</code> \| <code>&quot;after&quot;</code> | the closest available block to the provided timestamp, either "before" or "after" |

**Example**  
```js
=ES$GETBLOCKNOBYTIME(1578638524, "before")
```
<a name="ES$GETBLOCKREWARD"></a>

## ES$GETBLOCKREWARD([blockno], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Block And Uncle Rewards by BlockNo

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockNumber,timeStamp,blockMiner,blockReward,uncles,uncleInclusionReward  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [blockno] | <code>number</code> |  | the integer block number |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$GETBLOCKREWARD(2165403)
```
<a name="ES$DAILYAVGBLOCKSIZE"></a>

## ES$DAILYAVGBLOCKSIZE([startdate], [enddate], [sort], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Average Block Size

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,blockSize_bytes  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [startdate] | <code>string</code> |  | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| [enddate] | <code>string</code> |  | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$DAILYAVGBLOCKSIZE("2019-02-01", "2019-02-28")
```
<a name="ES$DAILYAVGBLOCKTIME"></a>

## ES$DAILYAVGBLOCKTIME([startdate], [enddate], [sort], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Average Time for A Block to be Included in the Ethereum Blockchain

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,blockSize_bytes  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [startdate] | <code>string</code> |  | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| [enddate] | <code>string</code> |  | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$DAILYAVGBLOCKTIME("2019-02-01", "2019-02-28")
```
<a name="ES$DAILYBLKCOUNT"></a>

## ES$DAILYBLKCOUNT([startdate], [enddate], [sort], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Block Count and Rewards

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,blockCount,blockRewards_Eth  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [startdate] | <code>string</code> |  | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| [enddate] | <code>string</code> |  | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$DAILYBLKCOUNT("2019-02-01", "2019-02-28")
```
<a name="ES$DAILYBLOCKREWARDS"></a>

## ES$DAILYBLOCKREWARDS([startdate], [enddate], [sort]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Block Rewards

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,blockRewards_Eth  

| Param | Type | Description |
| --- | --- | --- |
| [startdate] | <code>string</code> | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| [enddate] | <code>string</code> | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$DAILYBLOCKREWARDS("2019-02-01", "2019-02-28")
```
<a name="ES$DAILYUNCLEBLKCOUNT"></a>

## ES$DAILYUNCLEBLKCOUNT([startdate], [enddate], [sort], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Uncle Block Count and Rewards

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,uncleBlockCount,uncleBlockRewards_Eth  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [startdate] | <code>string</code> |  | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| [enddate] | <code>string</code> |  | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$DAILYUNCLEBLKCOUNT("2019-02-01", "2019-02-28")
```
