import { createTRPCProxyClient, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "./routers/router"; // ensure correct import
// import Constants from "expo-constants";

const baseUrl = "https://us-central1-react-native-anki.cloudfunctions.net/trpcApi/trpc";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: baseUrl,
    }),
  ],
});
