import express from "express";
import * as albumController from "../controllers/albumControllers.js";
import morgan from "morgan";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(morgan("combined"));

// Correct usage of post route
router.get("/albums", authenticateToken, albumController.getAlbumsController);
router.post(
  "/albums",
  authenticateToken,
  albumController.createAlbumController
);
router.put(
  "/albums/:id",
  authenticateToken,
  albumController.updateAlbumController
);
router.patch(
  "/albums/:id",
  authenticateToken,
  albumController.updateAlbumController
);
router.delete(
  "/albums/:id",
  authenticateToken,
  albumController.deleteAlbumController
);

// Add other routes as needed

export default router;
