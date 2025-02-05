"use client";
import { useState, createContext, ReactNode } from "react";

interface Item {
  id: number;
  path: string;
  dscr: string;
}

interface DataContextType {
  data: Item | null;
  setData: (item: Item) => void;
  toggle: boolean | null;
  setToggle: (item: boolean) => void;
}

export const DataContext = createContext<DataContextType | null>(null);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Item | null>(null);
  const [toggle, setToggle] = useState(false);

  return (
    <DataContext.Provider value={{ data, setData, toggle, setToggle }}>
      {children}
    </DataContext.Provider>
  );
};
