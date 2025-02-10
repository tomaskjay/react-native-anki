"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trpc = void 0;
const react_query_1 = require("@trpc/react-query");
// import Constants from "expo-constants";
const baseUrl = "https://us-central1-react-native-anki.cloudfunctions.net/trpcApi/trpc";
exports.trpc = (0, react_query_1.createTRPCProxyClient)({
    links: [
        (0, react_query_1.httpBatchLink)({
            url: baseUrl,
        }),
    ],
});
//# sourceMappingURL=client.js.map