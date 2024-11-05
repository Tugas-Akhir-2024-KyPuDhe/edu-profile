import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { School } from "../interfaces";
import { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";

export function MyFooter() {

  const [schoolConfig] = useState<School>(JSON.parse(localStorage.getItem("school_config")!))
  
  return (
    <Footer container className="border-t shadow-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-3">
          <div className="flex flex-col gap-2">
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Logo"
              name={schoolConfig.name}
            />
            <h4>{schoolConfig.address}</h4>
            <a href={"tel:"+schoolConfig.telp} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"> <PhoneIcon width={24} />  {schoolConfig.telp}</a>
            <a href={"mailto:"+schoolConfig.email} className="flex gap-2 items-center text-sm text-gray-500 hover:underline"><EnvelopeIcon width={24} />{schoolConfig.email}</a>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.7082479234086!2d99.01353117567656!3d2.6008966562766807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031f01ad5a61e53%3A0xa1341928e9376e81!2sSMK%20Negeri%201%20Lumbanjulu!5e0!3m2!1sen!2sid!4v1730804530458!5m2!1sen!2sid" className="w-full sm:w-1/2 md:w-1/3 h-80" loading="lazy"></iframe>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by={schoolConfig.name}
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href={"https://www.facebook.com/"+schoolConfig.fb} icon={BsFacebook} />
            <Footer.Icon href={"https://www.instagram.com/"+schoolConfig.ig} icon={BsInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
