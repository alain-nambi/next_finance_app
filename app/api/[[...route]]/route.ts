import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

// Initialise Hono avec un base path
const app = new Hono().basePath("/api");

// Define a simple route
app
  .get("/", (c) => {
    return c.text("Hello from Hono!");
  })
  .get('hello/:test', (c) => {
    const test = c.req.param('test');
    return c.text(`Hello ${test}!`);
  })

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
export const OPTIONS = handle(app);
