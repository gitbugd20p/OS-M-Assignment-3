import express from "express";
const router = express.Router();

// import controller
import * as PostBodyController from "../app/controllers/postBodyController.js";

router.post("/testPostBody", PostBodyController.testPostBody);

// export router
export default router;
