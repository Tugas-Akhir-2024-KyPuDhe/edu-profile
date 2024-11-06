import { Carousel } from "flowbite-react";

export const MyCarousel = ()=> {
  return (
    <div className="h-96 md:h-[80vh]">
      <Carousel slideInterval={5000} theme={{scrollContainer : {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth"
      }}}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Content 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Content 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Content 3
        </div>
      </Carousel>
    </div>
  );
}