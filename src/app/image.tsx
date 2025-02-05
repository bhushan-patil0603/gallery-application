"use client"
import { DataContext } from "@/providers/context";
import Image from "next/image";
import { useContext } from "react";

interface Item {
  id: number;
  path: string;
  dscr: string;
}

export const GridImage = ({ item }: { item: Item }) => {
  const dataContext = useContext(DataContext);
  if (!dataContext) return null;
  
  const { setData,setToggle } = dataContext;

  const setObject = () => {
    setData(item);
    setToggle(true);
  };

  return (
    <button onClick={setObject} type="button" className="relative size-full bg-white p-2">
      <div className="relative">
        <Image
          src={item.path}
          width={500}
          height={500}
          alt="Grid Image"
          unoptimized
        />
        <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100">
          <div className="mt-auto w-full bg-black/50 p-4">
            <p>{item.dscr}</p>
          </div>
        </div>
      </div>
    </button>
  );
};
