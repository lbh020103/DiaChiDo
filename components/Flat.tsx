'use client'

import React, { useEffect } from 'react'

import flat from '@/public/assets/flat.png'
import Image from 'next/image'

// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Flat = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='py-5 flex items-center justify-center drop-shadow-lg ' data-aos="zoom-in" data-aos-duration="1000">
        <Image 
            src={flat}
            alt='Flat'
            className='drop-shadow-lg h-72 w-full sm:h-44 max-[426px]:h-28 max-[425px]:w-48 object-contain '
        />
    </div>
  )
}

export default Flat