"use client";

import { SessionProvider } from "next-auth/react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};