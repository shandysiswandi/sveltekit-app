import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at"),
  deletedAt: timestamp("deleted_at"),
};
