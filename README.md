# SvelteKit Full-Stack Starter

A production-ready starter template for building modern, full-stack web applications. This repository provides a robust foundation featuring a clean architecture, type-safe database access with Drizzle, and a complete authentication system.

This project is designed to be a launchpad, saving you from the boilerplate and letting you focus on building features.

![Home Dark Mode](/docs/home-dark.png)

---

## Features

This starter template comes packed with a modern tech stack and tooling, all configured to work seamlessly together.

| Category          | Technology / Tool                                     | Purpose                                                              |
| ----------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| **Framework** | [SvelteKit](https://kit.svelte.dev/)                  | A full-stack framework for building high-performance web applications. |
| **Language** | [TypeScript](https://www.typescriptlang.org/)         | For robust, type-safe code across the entire stack.                  |
| **UI Components** | [shadcn-svelte](https://www.shadcn-svelte.com/)       | A collection of beautifully designed, accessible UI components.      |
| **Database ORM** | [Drizzle ORM](https://orm.drizzle.team/)              | A next-generation TypeScript ORM for type-safe database access.      |
| **Database** | [PostgreSQL](https://www.postgresql.org/)             | A powerful, open-source object-relational database system.           |
| **Container** | [Docker](https://www.docker.com/)                     | For consistent development and production environments.              |
| **Forms** | [SvelteKit Superforms](https://superforms.rocks/)     | A comprehensive library for building robust, validated forms.        |
| **Validation** | [Zod](https://zod.dev/)                               | For schema declaration and validation on both client and server.     |
| **Testing** | [Vitest](https://vitest.dev/) & [Playwright](https://playwright.dev/) | For unit, component, and end-to-end testing.                         |
| **Code Quality** | [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) | For maintaining a clean and consistent codebase.                     |

---

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js**: `v22.x` or higher
- **npm**: `v10.x` or higher
- **Docker**: Required to run the PostgreSQL database.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shandysiswandi/sveltekit-app.git
    cd sveltekit-app
    ```

2.  **Configure Environment Variables:**
    Copy the example `.env` file and update it with your local settings.
    ```bash
    cp .env.example .env
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Start the Database:**
    This command uses Docker Compose to start a PostgreSQL container in the background.
    ```bash
    npm run db:start
    ```

5.  **Run Database Migrations:**
    This command applies the Drizzle ORM schema to your new database.
    ```bash
    npm run db:migrate
    ```

6.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

The application will now be available at **http://localhost:5173**.

---

## Project Structure

This project follows a feature-driven architecture designed for scalability and maintainability.

-   `src/lib/components`: Contains reusable Svelte components.
    -   `ui/`: Low-level, unstyled components from `shadcn-svelte`.
    -   `custom/`: Your own application-specific components.
-   `src/lib/server`: Houses all backend logic, guaranteed to only run on the server.
    -   `db/`: Drizzle ORM setup and schema definitions.
    -   `data/`: The Data Access Layer (Repositories) for database interactions.
    -   `usecase/`: The Business Logic Layer (Services) that orchestrates actions.
-   `src/lib/model`: Defines the core data models (classes or types) for the application.
-   `src/routes`: Defines all pages and API endpoints, using SvelteKit's file-based routing. Route groups `(auth)` and `(main)` are used to apply different layouts.
-   `tests/`: Contains all unit and end-to-end tests.

---

## Available Scripts

This project includes a set of npm scripts to streamline common development tasks:

-   `npm run dev`: Starts the development server.
-   `npm run build`: Compiles the application for production.
-   `npm run start`: Runs the production-ready build.
-   `npm run lint`: Lints the codebase for errors.
-   `npm run format`: Formats all files with Prettier.
-   `npm run test:unit`: Runs all unit tests.
-   `npm run db:migrate`: Applies pending database migrations.
-   `npm run db:studio`: Opens the Drizzle Studio to browse your database.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
