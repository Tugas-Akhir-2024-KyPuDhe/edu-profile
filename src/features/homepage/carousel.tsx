import { Carousel } from "flowbite-react";

export const MyCarousel = ()=> {
  return (
    <div className="h-96 md:h-[80vh]">
      <Carousel slideInterval={5000}>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Carousel 1" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Carousel 2" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Carousel 3" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Carousel 4" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Carousel 5" />
      </Carousel>
    </div>
  );
}