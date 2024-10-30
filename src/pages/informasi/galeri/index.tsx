import {Header, MyFooter} from "../../../components";
import { MyBanner } from "../../../features/informasi/galeri";

export const Galeri = () => {
  return (
    <>
      <Header />
      <MyBanner />

      <div className="container py-10 gap-10 flex flex-col min-h-[40vh]">
        <p className="text-pretty text-xl font-semibold text-gray-900">ini halaman galeri</p>
      </div>

      <MyFooter />
    </>
  );
};
