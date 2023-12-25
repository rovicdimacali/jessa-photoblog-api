// src/routes/authRoutes.js
import express from "express";
import * as authController from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", authController.registerController);
router.post("/login", authController.loginController);

export default router;
