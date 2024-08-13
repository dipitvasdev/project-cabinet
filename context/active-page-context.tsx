"use client";
import React, { createContext, useState } from "react";

type ActivePageContextProviderProps = {
  children: React.ReactNode;
};

type ActivePageContextType = {
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

export const ActivePageContext = createContext<ActivePageContextType | null>(
  null
);

export default function ActivePageContextProvider({
  children,
}: ActivePageContextProviderProps) {
  const [activePage, setActivePage] = useState<number>(1);

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
}

export function useActivePageContext() {
  const context = React.useContext(ActivePageContext);
  if (!context) {
    throw new Error(
      "useActivePageContext must be used within an ActivePageContextProvider"
    );
  }
  return context;
}
