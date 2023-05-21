"use client";

import { ThemeProvider } from "next-themes";
export function ThemeProviderCustom({ children }: any) {
  return (
    <ThemeProvider enableSystem={true} attribute={"class"}>
      {children}
    </ThemeProvider>
  );
}
