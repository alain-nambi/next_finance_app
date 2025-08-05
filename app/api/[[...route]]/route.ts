import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

export const runtime = "edge";

// Initialise Hono avec un base path
const app = new Hono().basePath("/api");

// Define a simple route
app
  .get("/", (c) => {
    return c.text("Hello from Hono!");
  })
  .post(
    "/create/:postId",
    zValidator(
      "json",
      z.object({
        title: z.string(),
        content: z.string(),
      })
    ),
    (c) => {
      const { title, content } = c.req.valid("json");

      return c.json({
        message: "Post created successfully",
        post: {
          id: c.req.param("postId"),
          title,
          content,
        },
      });
    }
  );

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
export const OPTIONS = handle(app);
