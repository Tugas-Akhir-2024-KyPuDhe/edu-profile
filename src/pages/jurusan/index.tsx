import { useEffect, useState } from "react";
import {MyBanner} from "../../components";
import { Fajusek } from "../../interfaces";
import { JurusanService } from "../../services";
import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";

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
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-medium">{data?.description}</h2>
            {data?.media.map(media=><img  src={media.url} alt={data?.name}/>)}
          </div>
        )}
      </div>
      
    </>
  );
};
