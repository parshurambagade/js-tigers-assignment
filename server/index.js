import { configDotenv } from "dotenv";
import express from "express";
import { MONGO_URL, PORT } from "./constants.js";
import connectDB from "./config/database.js";
import employeeRouter from "./routes/employee.route.js";
import cors from "cors";

configDotenv();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/employee", employeeRouter);

app.listen(PORT, async () => {
  await connectDB(MONGO_URL);
  console.log(`Server is running on port ${PORT}`);
});
