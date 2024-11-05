import {Header, MyFooter} from "../../components";
import {Jurusan, MyBanner, MyCarousel, Statistics} from "../../features/homepage";
import { News } from "../../features/konten/berita";

export const HomePage = () => {
  return (
    <>
      <Header />
      <MyCarousel />
      <Statistics />
      <MyBanner />
      <Jurusan />

      <div className="container py-10 gap-10 flex flex-col min-h-[40vh]">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Berita Terbaru</h2>
        <News />
      </div>
      
      <MyFooter />
    </>
  );
};
