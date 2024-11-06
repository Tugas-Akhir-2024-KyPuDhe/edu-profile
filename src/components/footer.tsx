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
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Logo"
              name={schoolConfig?.name}
              theme={{span: "self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-gray-800 dark:text-white"}}
            />
            <h4>{schoolConfig?.address}</h4>
            <a href={"tel:"+schoolConfig?.telp} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"> <FaPhone size={20} />  {schoolConfig?.telp}</a>
            <a href={"mailto:"+schoolConfig?.email} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"><FaEnvelope size={20} />{schoolConfig?.email}</a>
            <a href={"https://www.facebook.com/"+schoolConfig?.fb} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"> <FaFacebook size={20} />  {schoolConfig?.name}</a>
            <a href={"https://www.instagram.com/"+schoolConfig?.ig} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"> <FaInstagram size={20} />{schoolConfig?.name}</a>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.7082479234086!2d99.01353117567656!3d2.6008966562766807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031f01ad5a61e53%3A0xa1341928e9376e81!2sSMK%20Negeri%201%20Lumbanjulu!5e0!3m2!1sen!2sid!4v1730804530458!5m2!1sen!2sid" className="w-full sm:w-1/2 md:w-1/3 h-80" loading="lazy"></iframe>
        </div>
        <Footer.Divider />
        <h6 className="font-medium text-gray-500 text-center">Made with ❤️ by {schoolConfig?.name}</h6>
      </div>
    </Footer>
  );
}
