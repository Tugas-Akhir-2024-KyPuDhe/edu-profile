import { Footer } from "flowbite-react";
import { School } from "../interfaces";
import { useEffect, useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa6";

export function MyFooter() {

  const [schoolConfig, setSchoolConfig] = useState<School>()

  useEffect(()=> {
    if(localStorage.getItem("school_config")) {
      setSchoolConfig(JSON.parse(localStorage.getItem("school_config")!))
    }
  }, [])
  
  return (
    <Footer container theme={{root:{base:"w-full border-t bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between"}}}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-3">
          <div className="flex flex-col gap-2">
            <Footer.Brand
              href="/"
              src={schoolConfig?.logo.url || ''}
              alt="Logo"
              name={schoolConfig?.name}
              theme={{span: "self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-gray-800 dark:text-white"}}
            />
            <h4>{schoolConfig?.address}</h4>
            <a href={"tel:"+schoolConfig?.telp} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"> <FaPhone size={20} />  {schoolConfig?.telp}</a>
            <a href={"mailto:"+schoolConfig?.email} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"><FaEnvelope size={20} />{schoolConfig?.email}</a>
            <a href={schoolConfig?.fb} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"> <FaFacebook size={20} />  {schoolConfig?.name}</a>
            <a href={schoolConfig?.ig} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"> <FaInstagram size={20} />{schoolConfig?.name}</a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 h-80" dangerouslySetInnerHTML={{__html: schoolConfig?.maps.replace(`height="450"`, `height="100%"`).replace(`width="600"`, `width="100%"`) || ''}}></div>
        </div>
        <Footer.Divider />
        <h6 className="font-medium text-gray-500 text-center">Made with ❤️ by {schoolConfig?.name}</h6>
      </div>
    </Footer>
  );
}
