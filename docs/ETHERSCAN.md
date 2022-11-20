## Functions

<dl>
<dt><a href="#ES$ACCOUNT_BALANCE">ES$ACCOUNT_BALANCE(address, tag)</a></dt>
<dd><p>Get Ether Balance for a Single Address</p>
</dd>
<dt><a href="#ES$ACCOUNT_BALANCEMULTI">ES$ACCOUNT_BALANCEMULTI(addresses, [fields], tag)</a></dt>
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
<dt><a href="#ES$BLOCK_GETBLOCKCOUNTDOWN">ES$BLOCK_GETBLOCKCOUNTDOWN(blockno)</a></dt>
<dd><p>Get Estimated Block Countdown Time by BlockNo</p>
</dd>
<dt><a href="#ES$BLOCK_GETBLOCKNOBYTIME">ES$BLOCK_GETBLOCKNOBYTIME(timestamp, closest)</a></dt>
<dd><p>Get Block Number by Timestamp</p>
</dd>
<dt><a href="#ES$BLOCK_GETBLOCKREWARD">ES$BLOCK_GETBLOCKREWARD(blockno)</a></dt>
<dd><p>Get Block And Uncle Rewards by BlockNo</p>
</dd>
<dt><a href="#ES$BLOCK_DAILYAVGBLOCKSIZE">ES$BLOCK_DAILYAVGBLOCKSIZE(startdate, enddate, sort)</a></dt>
<dd><p>Get Daily Average Block Size</p>
</dd>
<dt><a href="#ES$BLOCK_DAILYAVGBLOCKTIME">ES$BLOCK_DAILYAVGBLOCKTIME(startdate, enddate, sort)</a></dt>
<dd><p>Get Daily Average Time for A Block to be Included in the Ethereum Blockchain</p>
</dd>
<dt><a href="#ES$BLOCK_DAILYBLKCOUNT">ES$BLOCK_DAILYBLKCOUNT(startdate, enddate, sort)</a></dt>
<dd><p>Get Daily Block Count and Rewards</p>
</dd>
<dt><a href="#ES$BLOCK_DAILYBLOCKREWARDS">ES$BLOCK_DAILYBLOCKREWARDS(startdate, enddate, sort)</a></dt>
<dd><p>Get Daily Block Rewards</p>
</dd>
<dt><a href="#ES$BLOCK_DAILYUNCLEBLKCOUNT">ES$BLOCK_DAILYUNCLEBLKCOUNT(startdate, enddate, sort)</a></dt>
<dd><p>Get Daily Uncle Block Count and Rewards</p>
</dd>
</dl>

<a name="ES$ACCOUNT_BALANCE"></a>

## ES$ACCOUNT\_BALANCE(address, tag)
Get Ether Balance for a Single Address

**Kind**: global function  

| Param | Type |
| --- | --- |
| address | <code>EthereumAddress</code> | 
| tag | <code>&quot;earliest&quot;</code> \| <code>&quot;pending&quot;</code> \| <code>&quot;latest&quot;</code> | 

<a name="ES$ACCOUNT_BALANCEMULTI"></a>

## ES$ACCOUNT\_BALANCEMULTI(addresses, [fields], tag)
Get Ether Balance for Multiple Addresses in a Single Call

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| addresses | <code>Array.&lt;EthereumAddress&gt;</code> |  | A range or comma separated Ethereum addresses |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| tag | <code>fields</code> |  |  |
|  | <code>tag</code> |  |  |

<a name="ES$ACCOUNT_TOKENNFTTX"></a>

## ES$ACCOUNT\_TOKENNFTTX(address, contractaddress, startblock, endblock, page, [offset], sort)
Get "Internal Transactions" by Block Range

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| contractaddress | <code>EthereumAddress</code> |  |  |
| startblock | <code>number</code> |  |  |
| endblock | <code>number</code> |  |  |
| page | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

<a name="ES$ACCOUNT_TOKENTX"></a>

## ES$ACCOUNT\_TOKENTX(address, startblock, endblock, page, [offset], sort)
Get 'Internal Transactions' by Transaction Hash

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| startblock | <code>number</code> |  |  |
| endblock | <code>number</code> |  |  |
| page | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

<a name="ES$ACCOUNT_TXLIST"></a>

## ES$ACCOUNT\_TXLIST(address, startblock, endblock, page, [offset], sort)
Get a list of 'Normal' Transactions By Address

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| startblock | <code>number</code> |  |  |
| endblock | <code>number</code> |  |  |
| page | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

<a name="ES$ACCOUNT_TXLISTINTERNAL"></a>

## ES$ACCOUNT\_TXLISTINTERNAL(address, startblock, endblock, page, [offset], sort)
Get a list of 'Internal' Transactions by Address

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  |  |
| startblock | <code>number</code> |  |  |
| endblock | <code>number</code> |  |  |
| page | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending * |

<a name="ES$BLOCK_GETBLOCKCOUNTDOWN"></a>

## ES$BLOCK\_GETBLOCKCOUNTDOWN(blockno)
Get Estimated Block Countdown Time by BlockNo

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| blockno | <code>number</code> | the integer block number |

**Example**  
```js
=ES$BLOCK_GETBLOCKCOUNTDOWN(16701588)
```
<a name="ES$BLOCK_GETBLOCKNOBYTIME"></a>

## ES$BLOCK\_GETBLOCKNOBYTIME(timestamp, closest)
Get Block Number by Timestamp

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | the integer representing the Unix timestamp in seconds |
| closest | <code>&quot;before&quot;</code> \| <code>&quot;after&quot;</code> | the closest available block to the provided timestamp, either "before" or "after" |

**Example**  
```js
=ES$BLOCK_GETBLOCKNOBYTIME(1578638524, "before")
```
<a name="ES$BLOCK_GETBLOCKREWARD"></a>

## ES$BLOCK\_GETBLOCKREWARD(blockno)
Get Block And Uncle Rewards by BlockNo

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| blockno | <code>number</code> | the integer block number |

**Example**  
```js
=ES$BLOCK_GETBLOCKREWARD(1)
```
<a name="ES$BLOCK_DAILYAVGBLOCKSIZE"></a>

## ES$BLOCK\_DAILYAVGBLOCKSIZE(startdate, enddate, sort)
Get Daily Average Block Size

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| startdate | <code>string</code> | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$BLOCK_DAILYAVGBLOCKSIZE("2019-02-01", "2019-02-28")
```
<a name="ES$BLOCK_DAILYAVGBLOCKTIME"></a>

## ES$BLOCK\_DAILYAVGBLOCKTIME(startdate, enddate, sort)
Get Daily Average Time for A Block to be Included in the Ethereum Blockchain

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| startdate | <code>string</code> | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$BLOCK_DAILYAVGBLOCKTIME("2019-02-01", "2019-02-28")
```
<a name="ES$BLOCK_DAILYBLKCOUNT"></a>

## ES$BLOCK\_DAILYBLKCOUNT(startdate, enddate, sort)
Get Daily Block Count and Rewards

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| startdate | <code>string</code> | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$BLOCK_DAILYBLKCOUNT("2019-02-01", "2019-02-28")
```
<a name="ES$BLOCK_DAILYBLOCKREWARDS"></a>

## ES$BLOCK\_DAILYBLOCKREWARDS(startdate, enddate, sort)
Get Daily Block Rewards

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| startdate | <code>string</code> | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$BLOCK_DAILYBLOCKREWARDS("2019-02-01", "2019-02-28")
```
<a name="ES$BLOCK_DAILYUNCLEBLKCOUNT"></a>

## ES$BLOCK\_DAILYUNCLEBLKCOUNT(startdate, enddate, sort)
Get Daily Uncle Block Count and Rewards

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| startdate | <code>string</code> | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| sort | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$BLOCK_DAILYUNCLEBLKCOUNT("2019-02-01", "2019-02-28")
```
