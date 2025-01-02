import BlockChainController from "../src/controller/BlockChainController";
import BlockChainService from "../src/services/BlockChainService";

jest.mock("../src/services/BlockChainService");

describe("BlockChainController", () => {
  it("should create a block and return status 201", async () => {
    const mockTransactions = [
      { sender: "Alice", receiver: "Bob", amount: 50 },
      { sender: "Charlie", receiver: "Dave", amount: 30 },
    ];

    const mockBlock = {
      hash: "mock-hash",
      transactions: mockTransactions,
    };

    const req: any = { body: { transactions: mockTransactions } };
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    (BlockChainService.createBlock as jest.Mock).mockResolvedValue(mockBlock);

    await BlockChainController.createBlock(req, res, next);

    expect(BlockChainService.createBlock).toHaveBeenCalledWith(mockTransactions);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockBlock);
  });

  it("should handle errors and call next with the error", async () => {
    const req: any = { body: {} };
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    const error = new Error("Test Error");
    (BlockChainService.createBlock as jest.Mock).mockRejectedValue(error);

    await BlockChainController.createBlock(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});
