import { Action } from "../interfaces/BaseController";
import BlockChainService from "../services/BlockChainService";

class BlockChainController {
  createBlock: Action = async (req, res, next) => {
    try {
      const { transactions } = req.body;
      const block = await BlockChainService.createBlock(transactions);
      res.status(201).json(block);
      return
    } catch (err: any) {
      next(err);
    }
  };

  getBlocks: Action = async (_req, res, next) => {
    try {
      const blocks = await BlockChainService.getBlocks();
      res.status(200).json(blocks);
      return;
    } catch (err: any) {
      next(err);
    }
  };

  addTransaction: Action = async (req, res, next) => {
    try {
      const { sender, receiver, amount } = req.body;
      const transaction = await BlockChainService.addTransaction(sender, receiver, amount);
      res.status(201).json(transaction);
      return
    } catch (err: any) {
      next(err);
    }
  };
}

export default new BlockChainController();
