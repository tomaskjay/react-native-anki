"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
// server/src/trpc/router.ts
const server_1 = require("@trpc/server");
const zod_1 = require("zod");
const t = server_1.initTRPC.create();
exports.appRouter = t.router({
    getDecks: t.procedure
        .input(zod_1.z.object({ userId: zod_1.z.string() }))
        .query(async ({ input }) => {
        // fetch user decks from Firestore
        return [];
    }),
    createDeck: t.procedure
        .input(zod_1.z.object({ userId: zod_1.z.string(), title: zod_1.z.string() }))
        .mutation(async ({ input }) => {
        // create deck in Firestore
        return { success: true };
    }),
});
//# sourceMappingURL=router.js.map