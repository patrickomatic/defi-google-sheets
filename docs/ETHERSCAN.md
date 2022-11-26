## Functions

<dl>
<dt><a href="#ES$BALANCE">ES$BALANCE(address, tag)</a> ⇒ <code>Wei</code></dt>
<dd><p>Get Ether Balance for a Single Address</p>
</dd>
<dt><a href="#ES$BALANCE_HISTORY">ES$BALANCE_HISTORY(address, blockno)</a> ⇒ <code>number</code></dt>
<dd><p>Get Historical Ether Balance for a Single Address By BlockNo</p>
</dd>
<dt><a href="#ES$BALANCEMULTI">ES$BALANCEMULTI(addresses, tag, [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Ether Balance for Multiple Addresses in a Single Call</p>
</dd>
<dt><a href="#ES$GETMINEDBLOCKS">ES$GETMINEDBLOCKS(address, blocktype, [fields], [page], [offset])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get list of Blocks Mined by Address</p>
</dd>
<dt><a href="#ES$TOKEN1155TX_BYADDRESS">ES$TOKEN1155TX_BYADDRESS(address, [fields], [startblock], [endblock], [page], [offset], [sort])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;ERC1155 - Token Transfer Events&#39; by Address</p>
</dd>
<dt><a href="#ES$TOKEN1155TX_BYADDRESSANDCONTRACTADDRESS">ES$TOKEN1155TX_BYADDRESSANDCONTRACTADDRESS(address, contractaddress, [fields], [startblock], [endblock], [page], [offset], [sort])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;ERC1155 - Token Transfer Events&#39; by Address</p>
</dd>
<dt><a href="#ES$TOKEN1155TX_BYCONTRACTADDRESS">ES$TOKEN1155TX_BYCONTRACTADDRESS(contractaddress, [fields], [startblock], [endblock], [page], [offset], [sort])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;ERC1155 - Token Transfer Events&#39; by Address</p>
</dd>
<dt><a href="#ES$TOKENNFTTX_BYADDRESS">ES$TOKENNFTTX_BYADDRESS(address, [page], [offset], [sort], [startblock], [endblock])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;ERC721 - Token Transfer Events&#39; by Address</p>
</dd>
<dt><a href="#ES$TOKENNFTTX_BYADDRESSANDCONTRACTADDRESS">ES$TOKENNFTTX_BYADDRESSANDCONTRACTADDRESS(address, contractaddress, [fields], [page], [offset], [sort], [startblock], [endblock])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;ERC721 - Token Transfer Events&#39; by Address</p>
</dd>
<dt><a href="#ES$TOKENNFTTX_BYCONTRACTADDRESS">ES$TOKENNFTTX_BYCONTRACTADDRESS(contractaddress, [page], [offset], [sort], [startblock], [endblock])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;ERC721 - Token Transfer Events&#39; by Address</p>
</dd>
<dt><a href="#ES$TOKENTX_BYADDRESS">ES$TOKENTX_BYADDRESS(address, [fields], [startblock], [endblock], [page], [offset], [sort])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;ERC20 - Token Transfer Events&#39; by Address</p>
</dd>
<dt><a href="#ES$TOKENTX_BYADDRESSANDCONTRACTADDRESS">ES$TOKENTX_BYADDRESSANDCONTRACTADDRESS(address, contractaddress, [fields], [startblock], [endblock], [page], [offset], [sort])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;ERC20 - Token Transfer Events&#39; by Address</p>
</dd>
<dt><a href="#ES$TOKENTX_BYCONTRACTADDRESS">ES$TOKENTX_BYCONTRACTADDRESS(contractaddress, [fields], [startblock], [endblock], [page], [offset], [sort])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get a list of &#39;ERC20 - Token Transfer Events&#39; by Address</p>
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
<dt><a href="#ES$DAILYAVGBLOCKSIZE">ES$DAILYAVGBLOCKSIZE(startdate, enddate, [sort], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Average Block Size</p>
</dd>
<dt><a href="#ES$DAILYAVGBLOCKTIME">ES$DAILYAVGBLOCKTIME(startdate, enddate, [sort], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Average Time for A Block to be Included in the Ethereum Blockchain</p>
</dd>
<dt><a href="#ES$DAILYBLKCOUNT">ES$DAILYBLKCOUNT(startdate, enddate, [sort], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Block Count and Rewards</p>
</dd>
<dt><a href="#ES$DAILYBLOCKREWARDS">ES$DAILYBLOCKREWARDS(startdate, enddate, [sort])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Block Rewards</p>
</dd>
<dt><a href="#ES$DAILYUNCLEBLKCOUNT">ES$DAILYUNCLEBLKCOUNT(startdate, enddate, [sort], [fields])</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get Daily Uncle Block Count and Rewards</p>
</dd>
</dl>

<a name="ES$BALANCE"></a>

## ES$BALANCE(address, tag) ⇒ <code>Wei</code>
Get Ether Balance for a Single Address

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>EthereumAddress</code> | the string representing the address to check for balance |
| tag | <code>number</code> \| <code>&quot;earliest&quot;</code> \| <code>&quot;pending&quot;</code> \| <code>&quot;latest&quot;</code> | the integer pre-defined block parameter, either earliest, pending or latest |

**Example**  
```js
=ES$BALANCE("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", "latest")
```
<a name="ES$BALANCE_HISTORY"></a>

## ES$BALANCE\_HISTORY(address, blockno) ⇒ <code>number</code>
Get Historical Ether Balance for a Single Address By BlockNo

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>EthereumAddress</code> | the string representing the address to check for balance |
| blockno | <code>number</code> | the integer block number |

**Example**  
```js
=ES$BALANCE_HISTORY("0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae", 8000000)
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
| address | <code>EthereumAddress</code> |  | the string representing the address to check for balance |
| blocktype | <code>&quot;blocks&quot;</code> \| <code>&quot;uncles&quot;</code> |  | the string pre-defined block type, either blocks for canonical blocks or uncles for uncle blocks only |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |

**Example**  
```js
=ES$GETMINEDBLOCKS("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", "*", 0, 3)
```
<a name="ES$TOKEN1155TX_BYADDRESS"></a>

## ES$TOKEN1155TX\_BYADDRESS(address, [fields], [startblock], [endblock], [page], [offset], [sort]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'ERC1155 - Token Transfer Events' by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,gas,gasPrice,gasUsed,hash,input,nonce,timeStamp,to,tokenDecimal,tokenName,tokenSymbol,transactionIndex,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  | the string representing the address to check for balance |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$TOKEN1155TX_BYADDRESS("0x4e83362442b8d1bec281594cea3050c8eb01311c", "*", 0, 27925780, 1, 3, "asc")
```
<a name="ES$TOKEN1155TX_BYADDRESSANDCONTRACTADDRESS"></a>

## ES$TOKEN1155TX\_BYADDRESSANDCONTRACTADDRESS(address, contractaddress, [fields], [startblock], [endblock], [page], [offset], [sort]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'ERC1155 - Token Transfer Events' by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,gas,gasPrice,gasUsed,hash,input,nonce,timeStamp,to,tokenDecimal,tokenName,tokenSymbol,transactionIndex,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  | the string representing the address to check for balance |
| contractaddress | <code>EthereumAddress</code> |  | the string representing the token contract address to check for balance |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$TOKEN1155TX_BYADDRESSANDCONTRACTADDRESS("0x4e83362442b8d1bec281594cea3050c8eb01311c", "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2", "*", 0, 27925780, 1, 3, "asc")
```
<a name="ES$TOKEN1155TX_BYCONTRACTADDRESS"></a>

## ES$TOKEN1155TX\_BYCONTRACTADDRESS(contractaddress, [fields], [startblock], [endblock], [page], [offset], [sort]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'ERC1155 - Token Transfer Events' by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,gas,gasPrice,gasUsed,hash,input,nonce,timeStamp,to,tokenDecimal,tokenName,tokenSymbol,transactionIndex,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| contractaddress | <code>EthereumAddress</code> |  | the string representing the token contract address to check for balance |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$TOKEN1155TX_BYCONTRACTADDRESS("0x4e83362442b8d1bec281594cea3050c8eb01311c", "*", 0, 27925780, 1, 3, "asc")
```
<a name="ES$TOKENNFTTX_BYADDRESS"></a>

## ES$TOKENNFTTX\_BYADDRESS(address, [page], [offset], [sort], [startblock], [endblock]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'ERC721 - Token Transfer Events' by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,gas,gasPrice,gasUsed,hash,input,nonce,timeStamp,to,tokenDecimal,tokenName,tokenSymbol,transactionIndex,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  | the string representing the address to check for balance |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |

**Example**  
```js
=ES$TOKENNFTTX_BYADDRESS("0x6975be450864c02b4613023c2152ee0743572325", "*", 1, 3)
```
<a name="ES$TOKENNFTTX_BYADDRESSANDCONTRACTADDRESS"></a>

## ES$TOKENNFTTX\_BYADDRESSANDCONTRACTADDRESS(address, contractaddress, [fields], [page], [offset], [sort], [startblock], [endblock]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'ERC721 - Token Transfer Events' by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,gas,gasPrice,gasUsed,hash,input,nonce,timeStamp,to,tokenDecimal,tokenName,tokenSymbol,transactionIndex,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  | the string representing the address to check for balance |
| contractaddress | <code>EthereumAddress</code> |  | the string representing the token contract address to check for balance |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |

**Example**  
```js
=ES$TOKENNFTTX_BYADDRESSANDCONTRACTADDRESS("0x6975be450864c02b4613023c2152ee0743572325", "*", 1, 3)
```
<a name="ES$TOKENNFTTX_BYCONTRACTADDRESS"></a>

## ES$TOKENNFTTX\_BYCONTRACTADDRESS(contractaddress, [page], [offset], [sort], [startblock], [endblock]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'ERC721 - Token Transfer Events' by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,gas,gasPrice,gasUsed,hash,input,nonce,timeStamp,to,tokenDecimal,tokenName,tokenSymbol,transactionIndex,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| contractaddress | <code>EthereumAddress</code> |  | the string representing the token contract address to check for balance |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |

**Example**  
```js
=ES$TOKENNFTTX_BYADDRESS("0x6975be450864c02b4613023c2152ee0743572325", "*", 1, 3)
```
<a name="ES$TOKENTX_BYADDRESS"></a>

## ES$TOKENTX\_BYADDRESS(address, [fields], [startblock], [endblock], [page], [offset], [sort]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'ERC20 - Token Transfer Events' by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,gas,gasPrice,gasUsed,hash,input,nonce,timeStamp,to,tokenDecimal,tokenName,tokenSymbol,transactionIndex,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  | the string representing the address to check for balance |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$TOKENTX_BYADDRESS("0x4e83362442b8d1bec281594cea3050c8eb01311c", "*", 0, 27925780, 1, 3, "asc")
```
<a name="ES$TOKENTX_BYADDRESSANDCONTRACTADDRESS"></a>

## ES$TOKENTX\_BYADDRESSANDCONTRACTADDRESS(address, contractaddress, [fields], [startblock], [endblock], [page], [offset], [sort]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'ERC20 - Token Transfer Events' by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,gas,gasPrice,gasUsed,hash,input,nonce,timeStamp,to,tokenDecimal,tokenName,tokenSymbol,transactionIndex,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  | the string representing the address to check for balance |
| contractaddress | <code>EthereumAddress</code> |  | the string representing the token contract address to check for balance |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$TOKENTX_BYADDRESSANDCONTRACTADDRESS("0x4e83362442b8d1bec281594cea3050c8eb01311c", "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2", "*", 0, 27925780, 1, 3, "asc")
```
<a name="ES$TOKENTX_BYCONTRACTADDRESS"></a>

## ES$TOKENTX\_BYCONTRACTADDRESS(contractaddress, [fields], [startblock], [endblock], [page], [offset], [sort]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'ERC20 - Token Transfer Events' by Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,gas,gasPrice,gasUsed,hash,input,nonce,timeStamp,to,tokenDecimal,tokenName,tokenSymbol,transactionIndex,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| contractaddress | <code>EthereumAddress</code> |  | the string representing the token contract address to check for balance |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$TOKENTX_BYCONTRACTADDRESS("0x4e83362442b8d1bec281594cea3050c8eb01311c", "*", 0, 27925780, 1, 3, "asc")
```
<a name="ES$TXLIST"></a>

## ES$TXLIST(address, [fields], [page], [offset], [sort], [startblock], [endblock]) ⇒ <code>Array.&lt;string&gt;</code>
Get a list of 'Normal' Transactions By Address

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - blockHash,blockNumber,confirmations,contractAddress,cumulativeGasUsed,from,functionName,gas,gasPrice,gasUsed,hash,input,isError,methodId,nonce,timeStamp,to,transactionIndex,txreceipt_status,value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| address | <code>EthereumAddress</code> |  | the string representing the address to check for balance |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |

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
| address | <code>EthereumAddress</code> |  | the string representing the address to check for balance |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |
| [page] | <code>number</code> |  |  |
| [offset] | <code>number</code> | <code>0</code> |  |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |

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
| startblock | <code>number</code> |  | the integer block number to start searching for transactions |
| endblock | <code>number</code> |  | the integer block number to stop searching for transactions |
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
| [startblock] | <code>number</code> |  | the integer block number to start searching for transactions |
| [endblock] | <code>number</code> |  | the integer block number to stop searching for transactions |

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

## ES$DAILYAVGBLOCKSIZE(startdate, enddate, [sort], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Average Block Size

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,blockSize_bytes  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| startdate | <code>string</code> |  | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> |  | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$DAILYAVGBLOCKSIZE("2019-02-01", "2019-02-28")
```
<a name="ES$DAILYAVGBLOCKTIME"></a>

## ES$DAILYAVGBLOCKTIME(startdate, enddate, [sort], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Average Time for A Block to be Included in the Ethereum Blockchain

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,blockSize_bytes  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| startdate | <code>string</code> |  | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> |  | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$DAILYAVGBLOCKTIME("2019-02-01", "2019-02-28")
```
<a name="ES$DAILYBLKCOUNT"></a>

## ES$DAILYBLKCOUNT(startdate, enddate, [sort], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Block Count and Rewards

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,blockCount,blockRewards_Eth  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| startdate | <code>string</code> |  | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> |  | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$DAILYBLKCOUNT("2019-02-01", "2019-02-28")
```
<a name="ES$DAILYBLOCKREWARDS"></a>

## ES$DAILYBLOCKREWARDS(startdate, enddate, [sort]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Block Rewards

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,blockRewards_Eth  

| Param | Type | Description |
| --- | --- | --- |
| startdate | <code>string</code> | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |

**Example**  
```js
=ES$DAILYBLOCKREWARDS("2019-02-01", "2019-02-28")
```
<a name="ES$DAILYUNCLEBLKCOUNT"></a>

## ES$DAILYUNCLEBLKCOUNT(startdate, enddate, [sort], [fields]) ⇒ <code>Array.&lt;string&gt;</code>
Get Daily Uncle Block Count and Rewards

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - UTCDate,unixTimeStamp,uncleBlockCount,uncleBlockRewards_Eth  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| startdate | <code>string</code> |  | the starting date in yyyy-MM-dd format, eg. 2019-02-01 |
| enddate | <code>string</code> |  | the ending date in yyyy-MM-dd format, eg. 2019-02-28 |
| [sort] | <code>&quot;asc&quot;</code> \| <code>&quot;desc&quot;</code> |  | the sorting preference, use "asc" to sort by ascending and "desc" to sort by descending |
| [fields] | <code>FieldsOrAll</code> | <code>&quot;*&quot;</code> | Which fields to return from the API response. By default all will be returned (in sorted order) |

**Example**  
```js
=ES$DAILYUNCLEBLKCOUNT("2019-02-01", "2019-02-28")
```
