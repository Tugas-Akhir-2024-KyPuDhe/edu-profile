import { useState } from "react";
import { School } from "../../../interfaces";
import parse from 'html-react-parser'

export const Misi = () => {
  const [schoolConfig] = useState<School>(JSON.parse(localStorage.getItem("school_config")!))
    return (
      <div className="flex flex-col gap-10 items-start">
        <h1 className="text-pretty text-lg md:text-xl lg:text-4xl font-semibold text-gray-900 p-5 bg-green-300">MISI</h1>
        <p className="text-pretty text-md md:text-xl font-semibold text-gray-900 text-justify html-content">
        {parse(schoolConfig.mission)}
        </p>
      </div>
    );
  };
  