import Link from "next/link";

export const Header = () => {
  return (
    <div className="mb-2 flex h-20 w-full items-center rounded-xl bg-white p-4">
      <div className="flex h-full items-center justify-center self-start">
        <p className="font-bold text-3xl text-green-600">
          <span className="text-black">ABT</span>Gallery
        </p>
      </div>
      <ul className="mr-5 ml-auto flex h-full items-center justify-center gap-4 justify-self-end font-semibold text-black text-lg">
        <li className="hover:underline">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:underline">
          <Link href={"/sort"}>Sort</Link>
        </li>
      </ul>
    </div>
  );
};
