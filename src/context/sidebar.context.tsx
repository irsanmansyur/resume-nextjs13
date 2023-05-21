"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

// @ts-ignore
export const SidebarContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>();

export function SidebarProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>;
}
