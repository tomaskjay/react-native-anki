import { inferAsyncReturnType } from "@trpc/server";

export const createTRPCContext = () => {
  // Add your context creation logic here (e.g., user authentication)
  return {};
};

export type TRPCContext = inferAsyncReturnType<typeof createTRPCContext>;