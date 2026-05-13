import express from "express";
import mongoose from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import { connect } from "mongoose";
const app = express();
config();
// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
    origin: ["https://week-6-4slc.onrender.com"],
    credentials:true,
  })
);

// Body parser
app.use(express.json());

// Routes
app.use("/emp-api", empRoute);

// Serve frontend (IMPORTANT)
//app.use(express.static(path.join(__dirname, "../frontend/dist")));

//app.use((req, res) => {
//  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//});

// DB connection + server start
const connectDB = async () => {
  try {
        await connect(process.env.DB_URL);
    
    console.log("DB connected");

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () =>
      console.log(`server listening on port ${PORT}..`)
    );
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

// Error handling
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
