import {Header, MyFooter} from "../../../components";
import { MyBanner, MyPagination, News } from "../../../features/konten/acara";

export const Acara = () => {
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
