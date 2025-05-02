# Server Application Folder Structure

This document outlines the recommended folder structure for the server application to promote scalability and maintainability.

```
apps/
└── server/
    ├── package.json
    ├── tsconfig.json
    └── src/
        ├── app.ts             # Hono app instance, global middleware registration, feature route mounting
        ├── server.ts          # Server entry point (starts the HTTP server)
        ├── config.ts          # Configuration loading (env vars, constants)
        ├── db.ts              # Database connection setup/client export (Example, create if needed)
        ├── global.d.ts        # Global TypeScript types/interfaces
        │
        ├── core/              # Shared core functionality, base classes, global utilities
        │   ├── auth.middleware.ts # Shared authentication middleware (Example)
        │   ├── ApiError.ts      # Custom base error class (Example)
        │   ├── errorHandler.ts  # Central error handler middleware (Example)
        │   └── logger.ts        # Generic logging utility (Example)
        │
        ├── features/          # Top-level directory for all application features/domains
        │   └── users/         # Example: 'users' feature module
        │       ├── user.routes.ts     # Defines routes, handlers & validation for /users
        │       ├── user.service.ts    # Business logic for users
        │       ├── user.repository.ts # Data access logic for users (interacts with DB)
        │       └── user.types.ts      # TypeScript interfaces/types for the user feature
        │   │
        │   └── products/      # Example: 'products' feature module
        │       ├── product.routes.ts    # Defines routes, handlers & validation for /products
        │       ├── product.service.ts
        │       ├── product.repository.ts
        │       └── product.types.ts
        │   │
        │   └── # ... other feature modules (e.g., orders, auth)

```

## Explanation of Key Directories:

1.  **`src/` (Root Files)**:
    *   `app.ts`: Hono app instance setup, global middleware, mounting feature routes.
    *   `server.ts`: Starts the actual HTTP server.
    *   `config.ts`: Loads and exports configuration.
    *   `db.ts`: Sets up and exports the database client/connection.
    *   `global.d.ts`: Contains global type declarations or augmentations.
2.  **`core/`**: Contains application-wide, shared concerns that don't belong to a specific feature. Examples:
    *   `auth.middleware.ts`: Authentication middleware.
    *   `ApiError.ts`, `errorHandler.ts`: Centralized error handling components.
    *   `logger.ts`: Shared logging setup.
3.  **`features/`**: This is the heart of the structure. Each subdirectory represents a distinct domain or feature (e.g., `users`, `products`).
    *   **`.routes.ts`**: Defines API endpoints, handlers, and validation for the feature. Imports and uses the feature's service. Mounted in `app.ts`.
    *   **`.service.ts`**: Contains the core business logic. Orchestrates operations, calls repositories.
    *   **`.repository.ts`**: Handles data access logic (database interactions).
    *   **`.types.ts`**: Defines TypeScript interfaces and types specific to the feature.
