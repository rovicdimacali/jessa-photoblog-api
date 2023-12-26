// src/routes/imageRoutes.js
import express from "express";
import * as imageController from "../controllers/imageControllers.js";
import morgan from "morgan";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(morgan("combined"));

router.post(
  "/images",
  authenticateToken,
  imageController.createImageController
);
router.get("/images", imageController.getImagesController);
router.put(
  "/images/:id",
  authenticateToken,
  imageController.updateImageController
);
router.patch(
  "/images/:id",
  authenticateToken,
  imageController.updateImageController
);
router.delete(
  "/images/:id",
  authenticateToken,
  imageController.deleteImageController
);
router.delete(
  "/delete-all-images/:album_id",
  authenticateToken,
  imageController.deleteAlbumImagesController
);

// Add other image-related routes as needed

export default router;
