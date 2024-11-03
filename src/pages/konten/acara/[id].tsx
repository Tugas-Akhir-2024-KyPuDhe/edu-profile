import { useParams } from "react-router-dom";
import {Header, MyBanner, MyFooter} from "../../../components";
import {  MyPagination, News } from "../../../features/konten/berita";
import { useEffect } from "react";

export const DetailAcara = () => {

    const {id} = useParams();

    useEffect(()=>{
        console.log(id)
    }, [])

  return (
    <>
      <Header />
      <MyBanner title="Detail Acara" currentPage="Detail Acara" beforePages={[{title: "Beranda", href: "/"}, {title: "Acara", href: "/konten/acara"}, ]} />

      <div className="container py-10 gap-10 flex flex-col min-h-[40vh]">
        <News />
        <MyPagination />
      </div>

      <MyFooter />
    </>
  );
};
