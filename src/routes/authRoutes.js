// src/routes/authRoutes.js
import express from "express";
import * as authController from "../controllers/authControllers.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", authController.registerController);
router.post("/login", authController.loginController);
router.get("/test", authenticateToken, (req, res) => {
  res.send("Test route reached!");
});

export default router;
