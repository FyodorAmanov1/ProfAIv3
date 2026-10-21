# ProfAI v3 · Backend Architecture

**A TypeScript service foundation for user accounts and persistent learning conversations.**

ProfAI v3 explores the backend side of the ProfAI application: HTTP routes, controllers, service classes and MongoDB models. The repository is a backend scaffold rather than a complete learning application; no frontend is included.

## Service areas

| Area | Source |
|---|---|
| Authentication | Registration/login routes and password/token service code |
| Users | User records, controllers and profile-related operations |
| Chat | Chat models and conversation persistence methods |
| Configuration | Environment-driven application settings |
| Real-time messaging | A separate WebSocket module requiring integration |

The Express entry point mounts `/api/auth`, `/api/chat` and `/api/user`. Mongoose supplies the database layer. The dependencies include bcrypt and JSON Web Tokens for the authentication design.

## Repository map

All application files are under [profai-backend](profai-backend/):

```text
src/
  app.ts          Express entry point and database connection
  routes/         HTTP route definitions
  controllers/    Request/response handling
  services/       Authentication, chat and user operations
  models/         MongoDB document models
  websocket/      Real-time messaging scaffold
```

## Development entry points

The declared commands are:

```bash
cd profai-backend
npm install
npm run dev
```

`npm run build` invokes TypeScript, while `npm start` runs the TypeScript entry point. A MongoDB instance and your own environment configuration are required. The entry point reads `MONGODB_URI`; the separate config module currently uses `DB_URI`, so these paths need reconciliation when completing the application. Use your own values rather than reusing a committed environment file.

## Current integration status

The scaffold needs a consistency pass before those commands can be treated as a verified working service. In particular, the WebSocket module is not connected by `app.ts`, imports `ws` without declaring it in the package dependencies and expects a `ChatService` interface that differs from the current service export.

These files document the intended layering, but do not establish a completed real-time chat service, production authentication or an AI tutor. The next implementation step is to align the service contracts, finish environment handling and connect the transport to the application server.
