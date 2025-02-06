"use client";
import { DataContext } from "@/providers/context";
import { useContext } from "react";
import { Dialog } from "./dialog";
import { GridImage } from "./image";
import { objArray } from "./obj-array";

export default function Home() {
  const itemArray = objArray;
  const dataContext = useContext(DataContext);
  if (!dataContext) return null;

  const { toggle } = dataContext;
  return (
    <div className="relative h-screen px-2">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:w-full md:grid-cols-3 lg:grid-cols-4">
        {itemArray.map((item) => (
          <li key={item.id}>
            <GridImage item={item} />
          </li>
        ))}
      </ul>
      {toggle && <Dialog />}
    </div>
  );
}
