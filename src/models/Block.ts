import crypto from "crypto";
import { Transaction } from "./Transaction";

export class Block {
  public hash: string;
  public previousHash: string;
  public timestamp: number;
  public transactions: Transaction[];
  public nonce: number;

  constructor(previousHash: string, transactions: Transaction[], timestamp: number, nonce = 0) {
    this.previousHash = previousHash;
    this.transactions = transactions;
    this.timestamp = timestamp;
    this.nonce = nonce;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto
      .createHash("sha256")
      .update(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce)
      .digest("hex");
  }

  mineBlock(difficulty: number) {
    while (!this.hash.startsWith("0".repeat(difficulty))) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }
}
