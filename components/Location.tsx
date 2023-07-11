'use client'

import React, { useEffect } from 'react'

// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Location = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='flex justify-center' data-aos="fade-up" data-aos-duration="1500">
       <div className='bg-amber-100 h-20 w-96 rounded-xl pl-7 pt-3 max-[425px]:w-80 mt-1 items-center' >
        <p className='text-red-600 text-lg font-black justify-center flex'>
              "ĐỊA CHỈ ĐỎ"
          </p>
          <p className='bg-black-600 text-base font-black justify-center flex'>
              DI TÍCH LỊCH SỬ XÃ DUY PHƯỚC
          </p>
       </div>

       
    </div>
  )
}

export default Location