import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

//DEFINING USERS TABLE
export const usersTable = mysqlTable("users", {
  id: varchar({ length: 3 }).primaryKey(),
  username: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  role: varchar({ length: 10 }).notNull(),
});


