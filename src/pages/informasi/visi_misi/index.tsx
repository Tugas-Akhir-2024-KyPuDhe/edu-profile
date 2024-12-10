import {MyBanner} from "../../../components";
import {Visi, Misi } from "../../../features/informasi/visi_misi";

export const VisiMisi = () => {
  return (
    <>
      <MyBanner title="Visi dan Misi" currentPage="Visi dan Misi" beforePages={[{title: "Beranda", href: "/"}]} />

      <div className="container py-10 gap-10 flex flex-col ">
        <Visi />
        <Misi />
      </div>
    </>
  );
};
