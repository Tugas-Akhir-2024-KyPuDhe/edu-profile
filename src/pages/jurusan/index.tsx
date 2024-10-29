import {Header, MyFooter} from "../../components";
import { MyBanner } from "../../features/jurusan";

export const Jurusan = () => {
  return (
    <>
        <Header />
        <MyBanner />

        <div className="relative isolate px-6 md:px-24 lg:px-32 mx-auto py-24 justify-center items-center">
            <p className="text-pretty text-xl font-semibold text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis vitae necessitatibus maxime soluta rem fugiat eos laboriosam obcaecati non porro dolore ab provident molestiae hic ad, quibusdam natus impedit praesentium?</p>
        </div>
          
        <MyFooter />
    </>
  );
};
