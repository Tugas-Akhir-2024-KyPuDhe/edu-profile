import { useEffect, useState } from "react";
import { School } from "../../../interfaces";

export const Misi = () => {
  const [schoolConfig, setSchoolConfig] = useState<School>()

  useEffect(()=> {
    if(localStorage.getItem("school_config")) {
      setSchoolConfig(JSON.parse(localStorage.getItem("school_config")!))
    }
  }, [])

    return (
      <div className="flex flex-col gap-10 items-start">
        <h1 className="text-pretty text-lg md:text-xl lg:text-4xl font-semibold text-gray-900 p-5 bg-red-300">MISI</h1>
        <div className="text-pretty text-md md:text-xl font-semibold text-gray-900 text-justify" dangerouslySetInnerHTML={{__html:schoolConfig?.mission.replace(/\n/g, "<br />") || ''}}>
        </div>
      </div>
    );
  };
  