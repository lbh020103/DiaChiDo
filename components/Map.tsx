'use client'
import React from 'react'

import map from '@/public/assets/map.png'
import Image from 'next/image'

const Map = () => {
  return (
    <div className='my-7 flex justify-center items-center'>
        <Image 
            src={map}
            alt='map'
            height={300}
            className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[550px] w-[800px] sm:h-[450px] sm:w-[600px] max-[426px]:h-72 max-[426px]:w-max '
        />
    </div>
  )
}

export default Map