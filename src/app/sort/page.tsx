"use client";
import { Dialog } from "@/app/dialog";
import { GridImage } from "@/app/image";
import { objArray } from "@/app/obj-array";
import { DataContext } from "@/providers/context";
import { useContext } from "react";
const Naturepage = () => {
  const dataContext = useContext(DataContext);
  if (!dataContext) return null;

  const { toggle, sortString } = dataContext;

  const itemArray = objArray.filter((item) => {
    if (item.tag === sortString) return item;
  });
  return (
    <>
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
    </>
  );
};
export default Naturepage;
