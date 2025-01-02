import { Router } from "express";
import BlockChainController from "../controller/BlockChainController";
import validateApiKey from "../middlewares/AuthMiddleware";

const router = Router();
router.use(validateApiKey);

router.get('/', (_req, res) => {
    res.send('API Blockchain Simplificada!');
  });

  router.post("/blocks", BlockChainController.createBlock);
  router.get("/blocks", BlockChainController.getBlocks);
  router.post("/transactions", BlockChainController.addTransaction);

export default router;