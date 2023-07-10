import Link from "next/link";
import React from "react";
import Image from "next/image";

import { BsFacebook } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

import DoanThanhNien from "@/public/assets/huy_Hieu_Oan1.jpg";

const Footer = () => {
  return (
    <div className="relative items-center h-12 bg-amber-200 flex justify-center">
      <div className="container lg:px-40 relative items-center h-12 bg-amber-200 flex justify-between md:px-4 sm:px-2 max-[426px]:px-2">
      <Link href="https://www.facebook.com/tuoitreduyphuoc" className="font-bold text-gray-700 text-2xl ">
        <BsFacebook size={24} />
      </Link>

      <Link href="/">
        <Image
          src={DoanThanhNien}
          alt="DoanThanhNien"
          height={105}
          width={116}
          className="
            absolute
            top-[-100px]
            left-[47%]
            max-[1024px]:left-[454px] 
            max-[1024px]:top-[-100px] 
            max-[768px]:left-[326px] 
            max-[426px]:left-[155px] 
            max-[376px]:h-24 
            max-[376px]:w-20 
            max-[376px]:top-[-85px] 
            max-[376px]:left-[146px]
            " 
        />
      </Link>

      <Link href="https://duyxuyen.quangnam.gov.vn/webcenter/portal/duyxuyen/pages_trang-chu" className="font-bold text-gray-700 text-2xl ">
        <AiOutlineGlobal size={24} />
      </Link>
      </div>
    </div>
  );
};

export default Footer;
