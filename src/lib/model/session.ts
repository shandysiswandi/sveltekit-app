/**
 * The Session class model.
 */
export class Session {
    id: string;
    userId: number;
    expiresAt: Date;

    constructor({
        ...data
    }: {
        id: string;
        userId: number;
        expiresAt: Date
    }) {
        this.id = data.id;
        this.userId = data.userId;
        this.expiresAt = data.expiresAt;
    }
}
