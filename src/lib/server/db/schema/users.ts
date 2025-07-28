import { pgTable, serial, integer, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.timestamp";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar({ length: 50 }).unique().notNull(),
  email: varchar({ length: 100 }).unique().notNull(),
  password: varchar({ length: 255 }).notNull(),
  ...timestamps,
});
