import { configDotenv } from "dotenv";

configDotenv();

export const PORT = process.env.PORT || 7777;
export const MONGO_URL = process.env.MONGO_URL;
