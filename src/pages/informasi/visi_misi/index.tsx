import {Header, MyFooter} from "../../../components";
import { MyBanner, Visi, Misi } from "../../../features/informasi/visi_misi";

export const VisiMisi = () => {
  return (
    <>
      <Header />
      <MyBanner />

      <div className="container py-10 gap-10 flex flex-col min-h-[40vh]">
        <Visi />
        <Misi />
      </div>

      <MyFooter />
    </>
  );
};
