import { useEffect, useState } from "react";
import {MyBanner} from "../../../components";
import { FasilitasService } from "../../../services";
import { Fajusek } from "../../../interfaces";
import { Sidebar, Spinner } from "flowbite-react";
import LightGallery from "lightgallery/react";

export const Fasilitas = () => {

  const [data, setData] = useState<Fajusek[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState(0)
  
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

            <div className="flex gap-10">
              <Sidebar className="md:flex-none md:w-64 " theme={{root:{inner:"h-full overflow-y-auto overflow-x-hidden bg-[#1E7DC1] p-5"}}}>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    {
                      data.map((fasilitas,index)=>(
                        <Sidebar.Item href="#" onClick={()=>setActiveTab(index)} active={index == activeTab ? true : false} theme={{active:'bg-slate-100 text-slate-900 hover:bg-slate-100', base:"flex items-center justify-center p-2 text-base font-normal text-slate-200 hover:bg-slate-100 hover:text-slate-900"}} className={'capitalize'}>
                          {fasilitas.name}                        
                        </Sidebar.Item>
                      ))
                    }
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </Sidebar>
              <div className="flex-auto">
                <p>{data[activeTab].description}</p>

                <LightGallery elementClassNames="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {data[activeTab].media.map(media=>(
                      <img className="h-auto max-w-full rounded-lg hover:cursor-pointer" src={media.url}/>
                  ))}
                </LightGallery>
              </div>
            </div>

          )}
      </div>
    </>
  );
};
