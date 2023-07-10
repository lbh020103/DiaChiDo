'use client'

import React from 'react'

import flat from '@/public/assets/flat.png'
import Image from 'next/image'

const Flat = () => {
  return (
    <div className='py-5 flex items-center justify-center drop-shadow-lg '>
        <Image 
            src={flat}
            alt='Flat'
            className='drop-shadow-lg h-72 w-full sm:h-44 max-[426px]:h-28 max-[425px]:w-48 object-contain '
        />
    </div>
  )
}

export default Flat