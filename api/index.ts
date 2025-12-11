import express, { type Request, Response, NextFunction } from "express";
// Static import removed for dynamic loading
import { createServer } from "http";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const httpServer = createServer(app);

// Middleware setup
app.use(express.json({
    limit: '50mb',
    verify: (req, _res, buf) => {
        (req as any).rawBody = buf;
    },
}));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// Register routes
// We need to wrap this in an async function because registerRoutes is async
// and Vercel expects a function export or a listening server.
// However, for Vercel serverless, we usually export the app.
// But registerRoutes takes httpServer and app.

// Let's adapt the server setup for Vercel.
// Vercel serverless functions need to export a handler.
// Express app is a valid handler.

// We need to make sure routes are registered before exporting.
// Since registerRoutes is async, we might need a workaround or ensure it's synchronous-enough or use a different pattern.
// Looking at server/routes.ts, it seems to just set up routes and return the server. It doesn't seem to do heavy async work that blocks route registration *definitions*, 
// but it is async.

// Actually, `registerRoutes` in `server/routes.ts` is async.
// We can't easily export an async initialized app directly as a default export for Vercel if it's not a promise that resolves to the app (which Vercel might not support directly in all modes).
// Standard Vercel with Express: export default app;

// Let's try to initialize it.
// If registerRoutes is async, we can't await it at the top level in CommonJS/older Node, but in ES modules we can.
// The project is "type": "module" in package.json.

// Health check endpoint
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Ensure routes are registered
// Ensure routes are registered
(async () => {
    try {
        const { registerRoutes } = await import("../server/routes");
        registerRoutes(httpServer, app);
    } catch (err) {
        console.error("Failed to register routes:", err);
    }
})();

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
});

export default app;
