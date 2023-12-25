// src/routes/imageRoutes.js
import express from "express";
import * as paintingImageControllers from "../controllers/paintingImageControllers.js";
import morgan from "morgan";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(morgan("combined"));

router.post(
  "/painting-images",
  authenticateToken,
  paintingImageControllers.createImageController
);
router.get(
  "/painting-images",
  authenticateToken,
  paintingImageControllers.getImagesController
);
router.put(
  "/painting-images/:id",
  authenticateToken,
  paintingImageControllers.updateImageController
);
router.patch(
  "/painting-images/:id",
  authenticateToken,
  paintingImageControllers.updateImageController
);
router.delete(
  "/painting-images/:id",
  authenticateToken,
  paintingImageControllers.deleteImageController
);
router.delete(
  "/delete-all-painting-images/:album_id",
  authenticateToken,
  paintingImageControllers.deleteAlbumImagesController
);

// Add other image-related routes as needed

export default router;
