import express from "express";
import * as paintingControllers from "../controllers/paintingControllers.js";
import morgan from "morgan";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(morgan("combined"));

// Correct usage of post route
router.get(
  "/paintings",
  authenticateToken,
  paintingControllers.getAlbumsController
);
router.post(
  "/paintings",
  authenticateToken,
  paintingControllers.createAlbumController
);
router.put(
  "/paintings/:id",
  authenticateToken,
  paintingControllers.updateAlbumController
);
router.patch(
  "/paintings/:id",
  authenticateToken,
  paintingControllers.updateAlbumController
);
router.delete(
  "/paintings/:id",
  authenticateToken,
  paintingControllers.deleteAlbumController
);

// Add other routes as needed

export default router;
