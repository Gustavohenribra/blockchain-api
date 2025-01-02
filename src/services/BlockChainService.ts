import { Blockchain } from "../models/Blockchain";
import { Transaction } from "../models/Transaction";

class BlockChainService {
  private blockchain: Blockchain;

  constructor() {
    this.blockchain = new Blockchain();
  }

  async createBlock(transactions: Transaction[]) {
    this.blockchain.addTransactions(transactions);
    const block = this.blockchain.minePendingTransactions();
    return block;
  }

  async getBlocks() {
    return this.blockchain.getChain();
  }

  async addTransaction(sender: string, receiver: string, amount: number) {
    const transaction = new Transaction(sender, receiver, amount);
    this.blockchain.addTransaction(transaction);
    return transaction;
  }
}

export default new BlockChainService();
