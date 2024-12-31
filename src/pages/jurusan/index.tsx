import { useEffect, useState } from "react";
import {MyBanner} from "../../components";
import { Fajusek } from "../../interfaces";
import { JurusanService } from "../../services";
import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";
import LightGallery from "lightgallery/react";

export const Jurusan = () => {

  const [data, setData] = useState<Fajusek>()
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams();
  
  useEffect(()=>{
    loadData()

    async function loadData() {
      setIsLoading(true)
      try {
        const response = await JurusanService().single(parseInt(id!))
        setData(response.data)
      } catch (error) {
        console.error(error)      
      }
      setIsLoading(false)
    }
  }, [id])

  return (
    <>
      <MyBanner title={data?.name || ''} currentPage="Jurusan" beforePages={[{title: "Beranda", href: "/"}]} />

      <div className="container py-10 gap-10 flex flex-col ">
        {isLoading ? (
          <div className="m-auto">
            <Spinner size="lg"/>
          </div>
        ) : (
        <div>
          <h2 className="text-md">{data?.description}</h2>

          <LightGallery elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {data?.media.map(media=>(
                <img className="h-auto max-w-full rounded-lg hover:cursor-pointer" src={media.url}/>
            ))}
          </LightGallery>
        </div>
        )}
      </div>
      
    </>
  );
};
