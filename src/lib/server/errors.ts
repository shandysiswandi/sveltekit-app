/**
 * Base class for all custom application errors.
 * This allows you to catch any of your custom errors with `instanceof AppError`.
 */
export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AppError";
  }
}

/**
 * Thrown when a requested resource (like a user) is not found.
 * This will typically result in a 404.
 */
export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message);
    this.name = "NotFoundError";
  }
}

/**
 * Thrown when user input fails validation.
 * This will typically result in a 400 or 422 response.
 */
export class ValidationError extends AppError {
  constructor(message = "Validation failed") {
    super(message);
    this.name = "ValidationError";
  }
}

/**
 * Thrown when authentication fails (e.g., incorrect password).
 * This will typically result in a 401 response.
 */
export class AuthenticationError extends AppError {
  constructor(message = "Authentication failed") {
    super(message);
    this.name = "AuthenticationError";
  }
}
