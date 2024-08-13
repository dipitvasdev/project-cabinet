"use client";
import { tags } from "@/lib/tagColors";
import React, { useState } from "react";

type TagType =
  | "Data Science"
  | "Machine Learning"
  | "Web Development"
  | "Sofware Development"
  | "Data Analytics"
  | "Generative AI"
  | "Artificial Intelligence";

type ActiveFiltersContextProviderProps = {
  children: React.ReactNode;
};

type ActiveFiltersContextType = {
  activeFilters: TagType[];
  setActiveFilters: React.Dispatch<React.SetStateAction<TagType[]>>;
};

export const ActiveFiltersContext =
  React.createContext<ActiveFiltersContextType | null>(null);
export default function ActiveFiltersContextProvider({
  children,
}: ActiveFiltersContextProviderProps) {
  const [activeFilters, setActiveFilters] = useState<TagType[]>(tags);
  return (
    <ActiveFiltersContext.Provider value={{ activeFilters, setActiveFilters }}>
      {children}
    </ActiveFiltersContext.Provider>
  );
}

export function useActiveFiltersContext() {
  const context = React.useContext(ActiveFiltersContext);
  if (!context) {
    throw new Error(
      "useActivePageContext must be used within an ActivePageContextProvider"
    );
  }
  return context;
}
