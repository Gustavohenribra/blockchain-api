import { Block } from "./Block";
import { Transaction } from "./Transaction";

export class Blockchain {
  private chain: Block[];
  private pendingTransactions: Transaction[];
  private difficulty: number;

  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
    this.difficulty = 2;
  }

  private createGenesisBlock() {
    return new Block("0", [], Date.now());
  }

  getChain() {
    return this.chain;
  }

  addTransaction(transaction: Transaction) {
    this.pendingTransactions.push(transaction);
  }

  addTransactions(transactions: Transaction[]) {
    this.pendingTransactions.push(...transactions);
  }

  minePendingTransactions() {
    const block = new Block(this.chain[this.chain.length - 1].hash, this.pendingTransactions, Date.now());
    block.mineBlock(this.difficulty);
    this.chain.push(block);
    this.pendingTransactions = [];
    return block;
  }
}
