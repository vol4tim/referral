import express from "express";
import controller from "../controllers/referral";

const router = express.Router();

router.get("/:referral/:sender/:referrer", controller.create);

export default router;
