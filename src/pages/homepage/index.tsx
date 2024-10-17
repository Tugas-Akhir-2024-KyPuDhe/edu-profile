import {Header, MyFooter} from "../../components";
import {Jurusan, MyBanner, MyCarousel, News, Statistics} from "../../features/homepage";

export const HomePage = () => {
  return (
    <>
      <Header />
      <MyCarousel />
      <Statistics />
      <MyBanner />
      <Jurusan />
      <News />
      <MyFooter />
    </>
  );
};
