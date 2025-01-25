import { useState } from "react";
import { School } from "../../../interfaces";

import parse from 'html-react-parser'
export const Visi = () => {

  const [schoolConfig] = useState<School>(JSON.parse(localStorage.getItem("school_config")!))

    return (
      <div className="flex flex-col gap-10 items-start">
        <h1 className="text-pretty text-lg md:text-2xl lg:text-4xl font-semibold text-slate-100 p-5 bg-[#1E7DC1]">VISI</h1>
        <p className="text-pretty text-md md:text-xl font-semibold text-gray-900 text-justify html-content">
        {parse(schoolConfig.vision)}
        </p>
      </div>
    );
  };
  