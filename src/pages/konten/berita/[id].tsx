import { useParams } from "react-router-dom";
import {Header, MyBanner, MyFooter} from "../../../components";
import {  MyPagination, News } from "../../../features/konten/berita";
import { useEffect } from "react";

export const DetailBerita = () => {

    const {id} = useParams();

    useEffect(()=>{
        console.log(id)
    }, [])

  return (
    <>
      <Header />
      <MyBanner title="Detail Berita" currentPage="Detail Berita" beforePages={[{title: "Beranda", href: "/"}, {title: "Berita", href: "/konten/berita"}, ]} />

      <div className="container py-10 gap-10 flex flex-col min-h-[40vh]">
        <News />
        <MyPagination />
      </div>

      <MyFooter />
    </>
  );
};

