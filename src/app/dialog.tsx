"use client";

import { DataContext } from "@/providers/context";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { GridImage2 } from "./image";
import { objArray } from "./obj-array";

export const Dialog = () => {
  const dataContext = useContext(DataContext);
  if (!dataContext) return null;

  const { data, setData, setToggle } = dataContext;
  const removeData = () => {
    setData(undefined);
    setToggle(false);
  };

  const slideNext = () => {
    let nextId: number;
    if (data?.id) {
      nextId = (data.id % objArray.length) + 1;
    }
    const newdata = objArray.find((item) => item.id === nextId);
    setData(newdata);
  };

  const slidePrev = () => {
    let nextId: number;
    if (data?.id) {
      nextId = (data.id % objArray.length) - 1;
      if (nextId === 0) {
        nextId = objArray.length;
      }
      if (nextId === -1) {
        nextId = objArray.length - 1;
      }
    }
    const newdata = objArray.find((item) => item.id === nextId);

    setData(newdata);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-white">
      {data && (
        <div className="relative w-full">
          <button
            type="button"
            onClick={removeData}
            className=" z-50 float-right mt-5 font-medium text-4xl text-red-700"
          >
            x
          </button>
          <Image
            src={data?.path}
            width={700}
            height={700}
            className="m-auto object-contain"
            alt="Grid Image"
          />
          <button
            type="button"
            onClick={slideNext}
            className="absolute top-[50%] right-0 bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          >
            <ChevronsRight />
          </button>

          <button
            type="button"
            onClick={slidePrev}
            className="absolute top-[50%] left-0 bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          >
            <ChevronsLeft />
          </button>
          <div className="absolute bottom-10 w-full">
            <div className="relative w-full overflow-x-auto">
              <ul className="scroll-snap-x mandatory flex flex-nowrap gap-1 px-[50px]">
                {objArray.map((item) => (
                  <li
                    key={item.id}
                    className="scroll-snap-align-start h-[70px] w-[70px] flex-shrink-0"
                  >
                    <GridImage2 item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="fixed bottom-9 left-[50%] z-50 h-25 w-25">
            <Image
              src={data?.path}
              width={700}
              height={700}
              className="m-auto object-contain"
              alt="Grid Image"
            />
          </div>
        </div>
      )}
    </div>
  );
};
