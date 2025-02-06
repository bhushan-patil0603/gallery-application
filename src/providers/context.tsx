"use client";
import { type ReactNode, createContext, useState } from "react";

interface Item {
  id: number;
  path: string;
  dscr: string;
  tag: string;
}

interface DataContextType {
  data: Item | undefined;
  setData: (item: Item | undefined) => void;
  toggle: boolean | null;
  setToggle: (item: boolean) => void;
  sortString: string | null;
  setSortString: (item: string) => void;
}

export const DataContext = createContext<DataContextType | null>(null);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Item | undefined>(undefined);
  const [toggle, setToggle] = useState(false);
  const [sortString, setSortString] = useState("");

  return (
    <DataContext.Provider
      value={{ data, setData, toggle, setToggle, sortString, setSortString }}
    >
      {children}
    </DataContext.Provider>
  );
};
