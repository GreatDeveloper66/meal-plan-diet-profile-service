import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import {
  createNutritionalProfile,
  getNutritionalProfile,
  updateNutritionalProfile,
} from "../controllers/nutritionalProfileController.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Example route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.post("/api/create-nutritional-profile", createNutritionalProfile);
app.get("/api/get-nutritional-profile", getNutritionalProfile);
app.patch("/api/update-nutritional-profile", updateNutritionalProfile);

export default app;
