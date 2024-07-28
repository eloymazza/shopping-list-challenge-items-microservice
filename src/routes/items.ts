import { Router } from "express";
import { getItems } from "../controllers/itemsController";

const router = Router();

router.get("/", getItems);
// router.put("/", putItems);
// router.post("/", addItem);

export default router;
