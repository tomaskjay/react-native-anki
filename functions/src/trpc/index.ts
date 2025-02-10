import * as functions from "firebase-functions";
import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { createTRPCContext } from "./context";
import { appRouter } from "./routers/router";

const app = express();

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: createTRPCContext,
  })
);

export const trpcApi = functions.https.onRequest(app);