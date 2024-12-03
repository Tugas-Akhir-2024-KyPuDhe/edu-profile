import { useEffect, useState } from "react";
import { School } from "../../../interfaces";

export const Visi = () => {

  const [schoolConfig, setSchoolConfig] = useState<School>()

  useEffect(()=> {
    if(localStorage.getItem("school_config")) {
      setSchoolConfig(JSON.parse(localStorage.getItem("school_config")!))
    }
  }, [])

    return (
      <div className="flex flex-col gap-10 items-start">
        <h1 className="text-pretty text-lg md:text-2xl lg:text-4xl font-semibold text-gray-900 p-5 bg-green-300">VISI</h1>
        <p className="text-pretty text-md md:text-xl font-semibold text-gray-900 text-justify" dangerouslySetInnerHTML={{__html:schoolConfig?.vision.replace(/\n/g, "<br />") || ''}}></p>
      </div>
    );
  };
  