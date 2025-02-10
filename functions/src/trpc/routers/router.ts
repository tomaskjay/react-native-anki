// server/src/trpc/router.ts
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
  getDecks: t.procedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      // fetch user decks from Firestore
      return [];
    }),
  createDeck: t.procedure
    .input(z.object({ userId: z.string(), title: z.string() }))
    .mutation(async ({ input }) => {
      // create deck in Firestore
      return { success: true };
    }),
});

export type AppRouter = typeof appRouter;
