import { Button, Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { Banner } from "../../interfaces";
import { BannerService } from "../../services";
import { Link } from "react-router-dom";

export const MyCarousel = ()=> {

  const [data, setData] = useState<Banner[]>()

    useEffect(()=>{
        loadData()

        async function loadData() {
        try {
            const response = await BannerService().get()
            setData(response.data)
        } catch (error) {
            console.error(error)      
        }
        }
    }, [])


  return (
    <div className="h-96 md:h-[80vh]">
      {
        data && data.length > 0 ? (
          <Carousel slideInterval={5000} theme={{scrollContainer : {
            base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth"
          }}}>
            {data?.map(banner=>(
            <div key={banner.id} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-slate-100 relative">
              <div className="z-10 p-5 flex flex-col gap-3 top-0 absolute w-full">
                <div className="z-10 flex flex-col gap-3">
                  <h2 className="text-blue font-bold">{banner.title}</h2>
                  <p>{banner.description}</p>
                  <Link to={banner.link} target="_blank" className="w-fit">
                    <Button className='bg-[#1E7DC1]'>
                      {banner.title_link}
                    </Button>
                  </Link>
                </div>
                <div className="bg-white opacity-60 absolute w-full h-full top-0 left-0 z-0"></div>
              </div>
              <img src={banner.banner.url} alt={banner.title} className="object-center object-cover absolute w-full h-full z-0" />
            </div>
            ))}
          </Carousel>
        ) : <img className='w-1/3 mx-auto mt-10' src='./empty-data.svg' />
      }
      
    </div>
  );
}