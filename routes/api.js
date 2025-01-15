import express from "express";
const router = express.Router();
import * as FeaturesController from "../app/controllers/FeaturesController.js";
import * as DemoController from "../app/controllers/DemoController.js";
import authMiddleware from "../app/middlewares/authMiddleware.js";

// Check for demoController
router.get("/", DemoController.Demo);

// JWT Token encode and decode
router.get("/TokenEncode", FeaturesController.TokenEncode);
router.get("/TokenDecode", FeaturesController.TokenDecode);

export default router;
