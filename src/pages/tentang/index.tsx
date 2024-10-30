import {Header, MyFooter} from "../../components";
import { MyBanner } from "../../features/tentang";

export const Tentang = () => {
  return (
    <>
      <Header />
      <MyBanner />

      <div className="container py-10 gap-10 flex flex-col min-h-[40vh]">
        <p className="text-pretty text-xl font-semibold text-gray-900 text-justify my-auto">SMK Negeri 1 Lumban Julu pertama kali beroperasi pada tahun ajaran 2006/2007 yang pada saat itu masih memiliki 1 jurusan yaitu jurusan Teknik Otomotif. Lalu pada tahun ajaran 2008/2009 dibuka jurusan baru yang bernama Teknik Komputer dan Jaringan. 2 jurusan itu bertahan hingga sekarang tanpa ada pengurangan ataupun penambahan jurusan lain. Adapun perubahan yang dilakukan adalah perubahan nama jurusan yang mengacu pada kurikulum terbaru yaitu Teknik Kendaraan Ringan dan Otomotif, Teknik Jaringan Komputer dan Telekomunikasi?</p>
      </div>
        
      <MyFooter />
    </>
  );
};
