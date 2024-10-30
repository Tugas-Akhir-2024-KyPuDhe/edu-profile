import {Header, MyFooter} from "../../../components";
import { MyBanner, MyPagination, News } from "../../../features/konten/berita";

export const Berita = () => {
  return (
    <>
      <Header />
      <MyBanner />

      <div className="container py-10 gap-10 flex flex-col min-h-[40vh]">
        <News />
        <MyPagination />
      </div>

      <MyFooter />
    </>
  );
};
