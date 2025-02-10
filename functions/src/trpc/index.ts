// server/src/index.ts
import * as functions from "firebase-functions";
import { createTRPCContext } from "./context"; // optional context for user auth
import { appRouter } from "./routers/router";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";

const app = express();

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: createTRPCContext,
  })
);

export const trpcApi = functions.https.onRequest(app);