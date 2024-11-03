import {Header, MyFooter, MyBanner} from "../../components";

export const Ekskul = () => {
  return (
    <>
        <Header />
        <MyBanner title="Ekstrakurikuler" currentPage="Ekstrakurikuler" beforePages={[{title: "Beranda", href: "/"}]} />

        <div className="container py-10 gap-10 flex flex-col min-h-[40vh]">
          <p className="text-pretty text-xl font-semibold text-gray-900">ini halaman ekskul</p>
        </div>

        <MyFooter />
    </>
  );
};
