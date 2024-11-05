import { useState } from "react";
import {Header, MyFooter, MyBanner} from "../../components";
import { School } from "../../interfaces";

export const Tentang = () => {

  const [schoolConfig] = useState<School>(JSON.parse(localStorage.getItem("school_config")!))

  return (
    <>
      <Header />
      <MyBanner title="Tentang Sekolah" currentPage="Tentang Sekolah" beforePages={[{title: "Beranda", href: "/"}]} />

      <div className="container py-10 gap-10 flex flex-col ">
        <p className="text-pretty text-xl font-semibold text-gray-900 text-justify my-auto">{schoolConfig.about}</p>
      </div>
        
      <MyFooter />
    </>
  );
};
