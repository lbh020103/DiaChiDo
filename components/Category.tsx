'use client'

import Link from "next/link";
import React, { useEffect } from "react";

// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Category = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
   <div className="flex justify-center">
     <div className="container lg:px-40 ">
      <div className=" grid sm:grid-cols-2 max-[426px]:grid-cols-1 gap-5 items-center justify-center p-4 pt-4 pb-28 ">
        <Link 
          href='/nghiatrang'
          className="bg-red-500 border-5 font-italic italic  h-20 sm:h-16 rounded-full shadow-[4px_9px_6px_0px_#a0aec0]"
          data-aos="fade-right" data-aos-duration="1000"
        >
          <p className="block text-white text-lg  text-center justify-center mt-5">
            Nghĩa trang liệt sĩ xã Duy Phước
          </p>
        </Link>

        <Link 
          href='/consoc'
          className="bg-red-500 border-5 font-italic italic h-20 sm:h-16 rounded-full shadow-[4px_9px_6px_0px_#a0aec0]"
          data-aos="fade-left" data-aos-duration="1000"
        >
          <p className="text-white text-lg  text-center justify-center mt-5">
            Di tích Cồn Sóc
          </p>
        </Link>

        <Link 
          href='/myduan'
          className="bg-red-500 border-5 font-italic italic  h-20 sm:h-16 rounded-full shadow-[4px_9px_6px_0px_#a0aec0]"
          data-aos="fade-right" data-aos-duration="1000"
        >
          <p className="text-white text-lg  text-center justify-center mt-5">
            Di tích Mỹ Duân
          </p>
        </Link>

        <Link 
          href='/hamhan'
          className="bg-red-500 border-5 font-italic italic  h-20 sm:h-16 rounded-full shadow-[4px_9px_6px_0px_#a0aec0]"
          data-aos="fade-left" data-aos-duration="1000"

        >
          <p className="text-white text-lg  text-center justify-center mt-5">
            Di tích Hầm Hấn
          </p>
        </Link>
      </div>
      <div className="mb-1 flex justify-between max-[426px]:text-xs font-semibold px-1 text-xl ">
        <p className="max-[426px]:pl-1" >Chi đoàn thôn Hà Nhuận</p>
        <p className=" max-[426px]:pr-1">Đoàn TNCS Hồ Chí Minh</p>
      </div>
    </div>
   </div>
  );
};

export default Category;
