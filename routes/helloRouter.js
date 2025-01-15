import express from "express";
const router = express.Router();
import * as hello from "../app/controllers/helloController.js";

router.get("/", hello.helloWorld);

export default router;
