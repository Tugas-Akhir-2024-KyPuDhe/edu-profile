import {Header, MyFooter} from "../../../components";
import { MyBanner, MyPagination, News } from "../../../features/konten/berita";

export const Berita = () => {
  return (
    <>
      <Header />
      <MyBanner />
      <News />
      <MyPagination />
      <MyFooter />
    </>
  );
};
