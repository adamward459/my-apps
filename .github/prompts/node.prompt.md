---
mode: 'agent'
---

# Tao of Node - Software Design, Architecture & Best Practices Summary

## Structure & Coding Practices

- **Structure the application in modules**: Organize by domain modules rather than technical responsibilities (MVC). Each module should contain all related handlers, models, tests, and business logic.
- **Start with a modular monolith**: Begin with a modular structure before considering microservices. Maintain good boundaries between modules for easier extraction later.
- **Split implementation in layers**: Separate transport (HTTP), domain logic, and data access. This improves testability, readability, and maintainability.
- **Use services to communicate between modules**: Maintain module boundaries by letting modules communicate through service functions rather than direct database access.
- **Create domain entities**: Transform database-specific structures to domain models early to avoid leaking storage details throughout your application.
- **Separate utility functions and domain logic**: Don't put everything in a catch-all "utils" folder. Business logic belongs in domain layers.
- **Use hypertext for REST APIs**: Consider implementing HATEOAS to improve API discoverability and reduce client-server coupling.
- **Validate request structure**: Use validation libraries like Joi, ajv, or express-validator instead of writing validation logic manually.
- **Validate in middleware**: Implement validation before requests reach handlers for cleaner code.
- **Handle business logic outside middleware**: Middleware should control request flow but delegate actual business logic to services.
- **Favor functions over controller classes**: Use simple handler functions instead of classes unless there's a strong reason not to.
- **Use the Error object or extend it**: Throw proper Error objects to preserve stack traces. Consider extending Error with application-specific properties.
- **Listen to process signals**: Handle signals like SIGTERM to gracefully shut down your application.
- **Centralize error handling**: Create a unified error handling module rather than handling errors ad-hoc.
- **Send 404 responses in middleware**: Add a catch-all middleware after all routes to handle undefined routes.
- **Don't send error responses in handlers**: Throw errors and let centralized error handling manage them.
- **Shut down when unable to recover**: For unhandled exceptions, log the error and terminate the process gracefully.
- **Enforce consistency**: Maintain consistent coding standards and naming conventions.
- **Co-locate functionality**: Keep related code together. Group complex domain logic in subfolders.
- **Keep routes in modules**: Define routes within their respective modules rather than centralizing them.
- **Prefix API routes**: Version your API endpoints (e.g., `/v1/users`).
- **Attach user data for authenticated requests**: Store user information in `res.locals` for easy access in handlers.
- **Avoid callback-based APIs**: Use promise-based APIs to avoid "callback hell".
