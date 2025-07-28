import { Session } from "$lib/model/session";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "$lib/server/db/schema";
import { eq } from "drizzle-orm";
import { NotFoundError } from "../errors";
import { db } from "../db";

/**
 * The interface defining the contract for session data operations.
 */
export interface SessionDataSource {
    get(id: string): Promise<Session>;
    delete(id: string): Promise<boolean>;
    create(userId: number, expiresIn: number): Promise<Session>;
}

/**
 * The database implementation of the SessionDataSource.
 */
export class SessionDataSourceDB implements SessionDataSource {
    private readonly db: PostgresJsDatabase<typeof schema>;

    constructor(db: PostgresJsDatabase<typeof schema>) {
        this.db = db;
    }

    /**
     * Creates a new session for a given user.
     * @param userId - The ID of the user to create the session for.
     * @param expiresIn - The duration of the session in seconds.
     * @returns The newly created Session object.
     */
    async create(userId: number, expiresIn: number): Promise<Session> {
        const expiresAt = new Date(Date.now() + expiresIn * 1000);

        const [newSess] = await this.db
            .insert(schema.sessions)
            .values({ userId: userId, expiresAt: expiresAt })
            .returning();

        return new Session({
            id: newSess.id,
            userId: newSess.userId,
            expiresAt: newSess.expiresAt,
        });
    }

    /**
     * Finds a session by its ID.
     * @param id - The session ID.
     * @returns The Session object if found.
     * @throws {NotFoundError} If the session is not found.
     */
    async get(id: string): Promise<Session> {
        const sess = await this.db.query.sessions.
            findFirst({ where: eq(schema.sessions.id, id) });

        if (!sess) throw new NotFoundError("Session not found");

        return new Session({
            id: sess.id,
            userId: sess.userId,
            expiresAt: sess.expiresAt,
        });
    }

    /**
     * Deletes a session by its ID.
     * @param id - The session ID to delete.
     * @returns `true` if the session was deleted successfully.
     */
    async delete(id: string): Promise<boolean> {
        const result = await this.db.
            delete(schema.sessions).
            where(eq(schema.sessions.id, id));
        return result.count > 0;
    }
}

// Export a pre-built instance for convenience
export const sessionDataSource = new SessionDataSourceDB(db);