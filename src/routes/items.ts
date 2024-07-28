import { Router } from "express";
import {
  addItemController,
  deleteItemController,
  editItemController,
  getItemsController,
} from "../controllers/itemsController";

const router = Router();

router.get("/", getItemsController);
router.put("/:id", editItemController);
router.post("/", addItemController);
router.delete("/:id", deleteItemController);

export default router;
