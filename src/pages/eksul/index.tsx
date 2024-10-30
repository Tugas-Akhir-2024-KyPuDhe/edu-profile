import {Header, MyFooter} from "../../components";
import { MyBanner } from "../../features/ekskul";

export const Ekskul = () => {
  return (
    <>
        <Header />
        <MyBanner />

        <div className="container py-10 gap-10 flex flex-col min-h-[40vh]">
          <p className="text-pretty text-xl font-semibold text-gray-900">ini halaman ekskul</p>
        </div>

        <MyFooter />
    </>
  );
};
