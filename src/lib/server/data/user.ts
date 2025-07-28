import { User } from "$lib/model/user";
import { eq, or, and, isNull } from "drizzle-orm";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "$lib/server/db/schema";
import { NotFoundError } from "../errors";
import { db } from "../db";


/**
 * The interface defining the contract for user data operations.
 */
export interface UserDataSource {
  getByIdentity(identity: string): Promise<User>;
}

/**
 * The database implementation of the UserDataSource.
 */
export class UserDataSourceDB implements UserDataSource {
  private readonly db: PostgresJsDatabase<typeof schema>;

  constructor(db: PostgresJsDatabase<typeof schema>) {
    this.db = db;
  }

  /**
   * Finds a non-deleted user by their email or username.
   * @param identity - The user's email or username.
   * @returns The full User object if found.
   * @throws {NotFoundError} If no active user matches the identity.
   */
  async getByIdentity(identity: string): Promise<User> {
    const u = await this.db.query.users.findFirst({
      where: and(
        or(eq(schema.users.email, identity), eq(schema.users.username, identity)),
        isNull(schema.users.deletedAt),
      ),
    });

    if (!u) throw new NotFoundError("User not found");

    return new User({
      id: u.id,
      username: u.username,
      email: u.email,
      password: u.password,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
      deletedAt: u.deletedAt,
    });
  }
}

// Export a pre-built instance for convenience
export const userDataSource = new UserDataSourceDB(db);