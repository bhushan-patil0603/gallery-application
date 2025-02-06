"use client";

import { DataContext } from "@/providers/context";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";

const Sortbar = () => {
  const dataContext = useContext(DataContext);
  if (!dataContext) return null;
  const { setSortString } = dataContext;

  const [showDiv, setShowDiv] = useState(false);
  const toggleDiv = () => setShowDiv((prevState) => !prevState);

  return (
    <>
      <button
        type="button"
        onClick={toggleDiv}
        className="relative mb-4 flex w-full items-center rounded-full bg-white p-2"
      >
        <p className="font-semibold text-black">Sort by</p>
        <div className="ml-auto text-black">
          <ChevronsDown />
        </div>
      </button>

      {showDiv && (
        <div className="mb-4 bg-red-600 p-2">
          <ul className="flex flex-col gap-2">
            <Link href="/" className="hover:bg-red-700">
              <button type="button">All</button>
            </Link>
            <Link href="/sort" className="hover:bg-red-700">
              <button type="button" onClick={() => setSortString("nature")}>
                Nature
              </button>
            </Link>
            <Link href="/sort" className="hover:bg-red-700">
              <button type="button" onClick={() => setSortString("millitary")}>
                Millitary
              </button>
            </Link>
            <Link href="/sort" className="hover:bg-red-700">
              <button type="button" onClick={() => setSortString("home")}>
                Home
              </button>
            </Link>
            <Link href="/sort" className="hover:bg-red-700">
              <button type="button" onClick={() => setSortString("vehicle")}>
                Vehicle
              </button>
            </Link>
            <Link href="/sort" className="hover:bg-red-700">
              <button type="button" onClick={() => setSortString("food")}>
                Food
              </button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sortbar;
