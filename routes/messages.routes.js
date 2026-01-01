import express from "express";
import {
  msgEncryptController,
  msgDecryptController,
  getMessagesByUserController

} from "../controllers/messages.controller.js";

const router = express.Router();

router.post("/encrypt", msgEncryptController);
router.post("/decrypt", msgDecryptController);
router.get("/", getMessagesByUserController);


export default router;