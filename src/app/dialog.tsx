"use client"

import { DataContext } from "@/providers/context";
import Image from "next/image";
import { useContext } from "react"

export const Dialog = () => {
  const dataContext = useContext(DataContext);
  if (!dataContext) return null;
  
  const { data, setData, setToggle } = dataContext;
  const removeData=()=>{
    setData(null);
    setToggle(false);
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-white">
      {(data && <div>
          <button type="button" onClick={removeData} className=" z-50 float-right mt-5 font-medium text-4xl text-red-700">x</button>
          <Image
            src={data?.path}
            width={700}
            height={700}
            className="object-contain"
            alt="Grid Image"
          /></div>)
      }
    </div>
  )
}
