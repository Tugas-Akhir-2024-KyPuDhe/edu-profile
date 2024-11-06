import { useEffect, useRef, useState } from "react";
import {Header, MyFooter} from "../../components";
import {Jurusan, MyCarousel, Statistics} from "../../features/homepage";
import { News } from "../../features/konten/berita";
import { School } from "../../interfaces";
import { useIsVisible } from "../../utils";

export const HomePage = () => {

  const [schoolConfig, setSchoolConfig] = useState<School>()

  const ref1 = useRef(null)
  const isVisible1 = useIsVisible(ref1)

  const ref2 = useRef(null)
  const isVisible2 = useIsVisible(ref2)

  useEffect(()=> {
    if(localStorage.getItem("school_config")) {
      setSchoolConfig(JSON.parse(localStorage.getItem("school_config")!))
    }
  }, [])

  return (
    <>
      <Header />
      <MyCarousel />
      
      <div ref={ref1} className={`container gap-10 flex flex-col py-20 transition ease-in duration-700 ${isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        <h2 className="text-3xl font-bold text-center uppercase text-gray-900">Sejarah Singkat</h2>
        <p className="text-lg leading-8 text-gray-900 text-center">
            {schoolConfig?.about}
        </p>

      </div>

      <Statistics />
      <Jurusan />

      <div ref={ref2} className={`container gap-10 flex flex-col py-20 transition ease-in duration-700 ${isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-3xl font-bold text-center uppercase text-gray-900">Berita Terbaru</h2>
        <News />
      </div>
      
      <MyFooter />
    </>
  );
};
