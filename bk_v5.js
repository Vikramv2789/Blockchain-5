    //npm install --save crypto-js in the terminal ';
//type the following
const SHA256 = require('crypto-js/sha256');

class Transaction{
    constructor(fromAddress,toAddress,amount){
        this.fromAddress=fromAddress;
        this.toAddress=toAddress;
        this.amount=amount;
    }
}

class Block{
    constructor(timestamp, transactions, previousHash ='')
    {
        this.timestamp=timestamp;
        this.transactions=transactions;
        this.previousHash=previousHash;
        this.hash=this.calcHash();
        this.nonce=0;
    }

    calcHash(){
        return SHA256(this.index + this.previousHash() + this.timestamp + JSON.stringify(this.data)+this.nonce).toString();
    }

    mineBlock(difficulty)
    {
        while(this.hash.substring(0,difficulty)!== Array(difficulty+1).join("0")){
        this.hash=this.calcHash();
        this.nonce++;
    }
    console.log("Block mined"+this.hash);
}

createGensisBlock(){
    return new Block("03/01/2022", "Genesis Block", "0");
}

getLatestBlock(){
    return this.chain[this.chain.length-1];
}

minePendingTransactions(miningRewardAddress){
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mineBlock(this.difficulty);
    console.log("Block successfully mined");

    this.chain.push(block);

    this.pendingTransactions=[
        new Transaction(null,miningRewardAddress,this.miningReward)
    ];
    
}
 createTransaction(transaction){
    this.pendingTransactions.push(this.transaction);
 }

 getExtraReward(max){
    return Math.floor(Math.random() * max);
 }
}