import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { Provider as JotaiProvider } from "jotai";
import { setupExample } from "@/src/firebase/firestoreService";

export default function Layout() {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    console.log("useEffect called");
    setupExample(); // Call your function here
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <Slot />
      </JotaiProvider>
    </QueryClientProvider>
  );
}