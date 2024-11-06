import { Carousel } from "flowbite-react";

export const MyCarousel = ()=> {
  return (
    <div className="h-96 md:h-[80vh]">
      <Carousel slideInterval={5000} theme={{scrollContainer : {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth"
      }}}>
        <img src="https://i.pinimg.com/736x/54/ce/39/54ce39d259347c487215acd36663d4c7.jpg" alt="Carousel 1" />
        <img src="https://i.pinimg.com/736x/3b/0b/bc/3b0bbc9d75b1925578dba899b530a270.jpg" alt="Carousel 2" />
        <img src="https://i.pinimg.com/736x/4f/4b/9d/4f4b9d8340fa6db8be27dfbcc11cd109.jpg" alt="Carousel 3" />
      </Carousel>
    </div>
  );
}