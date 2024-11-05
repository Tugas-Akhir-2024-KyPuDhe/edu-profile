import { useEffect, useState } from "react";
import {Header, MyFooter, MyBanner} from "../../components";
import { Fajusek } from "../../interfaces";
import { JurusanService } from "../../services";
import { Spinner } from "flowbite-react";

export const Jurusan = () => {

  const [data, setData] = useState<Fajusek[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=>{
    loadData()

    async function loadData() {
      setIsLoading(true)
      try {
        const response = await JurusanService().all()
        setData(response.data)
      } catch (error) {
        console.error(error)      
      }
      setIsLoading(false)
    }
  }, [])

  return (
    <>
      <Header />
      <MyBanner title="Jurusan" currentPage="Jurusan" beforePages={[{title: "Beranda", href: "/"}]} />

      <div className="container py-10 gap-10 flex flex-col ">
        {isLoading ? (
          <div className="m-auto">
            <Spinner size="lg"/>
          </div>
        ) : (
          data.map(jurusan=>(
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-medium">{jurusan.name}</h2>
              <p>{jurusan.description}</p>
              {jurusan.media.map(media=><img  src={media.url} alt={jurusan.name}/>)}
            </div>
          ))
        )}
      </div>
      
      <MyFooter />
    </>
  );
};
