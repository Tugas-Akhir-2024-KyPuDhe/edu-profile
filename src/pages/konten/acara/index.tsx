import {Header, MyFooter} from "../../../components";
import { MyBanner, MyPagination, News } from "../../../features/konten/acara";

export const Acara = () => {
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
