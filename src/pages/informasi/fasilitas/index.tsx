import { useEffect, useState } from "react";
import {MyBanner} from "../../../components";
import { FasilitasService } from "../../../services";
import { Fajusek } from "../../../interfaces";
import { Spinner } from "flowbite-react";

export const Fasilitas = () => {

  const [data, setData] = useState<Fajusek[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    loadData()

    async function loadData() {
      setIsLoading(true)
      try {
        const response = await FasilitasService().all()
        setData(response.data)
      } catch (error) {
        console.error(error)      
      }
      setIsLoading(false)
    }
  }, [])

  return (
    <>
      <MyBanner title="Fasilitas" currentPage="Fasilitas" beforePages={[{title: "Beranda", href: "/"}]} />

      <div className="container py-10 gap-10 flex flex-col ">
        {isLoading ? (
          <div className="m-auto">
            <Spinner size="lg"/>
          </div>
        ) : (
          data.map(fasilitas=>(
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-medium">{fasilitas.name}</h2>
              <p>{fasilitas.description}</p>
              {fasilitas.media.map(media=><img  src={media.url} alt={fasilitas.name}/>)}
            </div>
          ))
        )}
      </div>
    </>
  );
};
