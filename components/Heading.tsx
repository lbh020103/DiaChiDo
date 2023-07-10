"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";

import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <nav className=" h-12 bg-amber-200 flex justify-center">
      <div className="container relative lg:px-40 flex justify-between items-center md:px-4 sm:px-2 max-[426px]:px-2">
        <Link 
          href='/'
          className="font-bold text-gray-700 text-2xl">
          <AiOutlineHome size={24} />
        </Link>
        <div
          className="font-bold text-gray-700 text-2xl" 
          onClick={toggleOpen}>
          <AiOutlineMenu size={24} />
        </div>

        {isOpen && (
        <div className="absolute rounded-xl shadow-md max-[1024px]:w-[100px] max-[426px]:w-2/4 max-[376px]:w-2/4 md:w-40 bg-white overflow-hidden right-0 min-[1024px]:right-[160px] top-12 text-sm z-30">
          <div className="flex flex-col cursor-pointer">
            <Link
              href="/consoc"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 hover:bg-neutral-100 trasition font-semibold"
            >
              Di tích Cồn Sóc
            </Link>

            <Link
              href="/hamhan"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 hover:bg-neutral-100 trasition font-semibold"
            >
              Di tích Hầm Hân
            </Link>

            <Link
              href="/myduan"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 hover:bg-neutral-100 trasition font-semibold"
              >
              Di tích Mỹ Dân
            </Link>

            <Link
              href="/nghiatrang"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 hover:bg-neutral-100 trasition font-semibold"
            >
              Nghĩa trang liệt sĩ
            </Link>
          </div>
        </div>
      )}

      </div>


    </nav>
  );
};

export default Heading;
