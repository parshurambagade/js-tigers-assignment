import { configDotenv } from "dotenv";
import express from "express";
import { MONGO_URL, PORT } from "./constants.js";
import connectDB from "./config/database.js";

configDotenv();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, async () => {
  await connectDB(MONGO_URL);
  console.log(`Server is running on port ${PORT}`);
});
