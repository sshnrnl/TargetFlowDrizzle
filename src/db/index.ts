import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";

//Making sure u have .env for DATABASE_URL
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}
const db = drizzle(process.env.DATABASE_URL);
