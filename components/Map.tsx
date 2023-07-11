"use client";
import React, { useEffect } from "react";

import map from "@/public/assets/map.png";
import Image from "next/image";

// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Map = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="my-7 flex justify-center items-center" data-aos="fade-up" data-aos-duration="1500">
      <Image
        src={map}
        alt="map"
        height={300}
        className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[550px] w-[800px] sm:h-[450px] sm:w-[600px] max-[426px]:h-72 max-[426px]:w-max "
      />
    </div>
  );
};

export default Map;
