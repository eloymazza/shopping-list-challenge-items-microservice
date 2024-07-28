import { Router } from "express";
import { healthCheck } from "../controllers/healthCheckController";
import itemsRoutes from "./items";

const router = Router();

router.get("/", healthCheck);
router.use("/items", itemsRoutes);

export default router;
