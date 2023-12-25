// src/app.js
import express from "express";
import albumRoutes from "./routes/albumRoutes.js";
import paintingRoutes from "./routes/paintingRoutes.js";
import paintingImagesRoutes from "./routes/paintingImagesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { multerMiddleware } from "./middlewares/multerMiddleware.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(multerMiddleware);
app.use(express.json());

// Routes
app.use("/api", albumRoutes);
app.use("/api", paintingRoutes);
app.use("/api", paintingImagesRoutes);
app.use("/api", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
