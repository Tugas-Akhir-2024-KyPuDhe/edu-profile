import { useEffect, useState } from "react";
import {Header, MyFooter, MyBanner} from "../../../components";
import { Gallery, Media } from "../../../interfaces";
import GalleryService from "../../../services/gallery";
import { Spinner } from "flowbite-react";

export const Galeri = () => {

    const [data, setData] = useState<Gallery[]>([])
    const [medias, setMedias] = useState<Media[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState(0)
    
    useEffect(()=>{
        loadData()

        async function loadData() {
            setIsLoading(true)
            try {
                const response = await GalleryService().get()
                setData(response.data)
                if(response.data.length) {
                    setMedias(response.data[0].media)
                }
            } catch (error) {
                console.error(error)      
            }
            setIsLoading(false)
        }
    }, [])

    const selectCategory = (index: number) => {
        setSelectedCategory(index)
        setMedias(data[index].media)
    } 

  return (
    <>
      <Header />
      <MyBanner title="Galeri" currentPage="Galeri" beforePages={[{title: "Beranda", href: "/"}]} />

      <div className="container py-10 gap-10 flex flex-col">
            {isLoading ? (
                <div className="m-auto">
                    <Spinner size="lg"/>
                </div>
            ) : (
                <>
                    <div className="flex items-center justify-center flex-wrap">
                        {data.map((gallery, index)=>(
                            <button key={gallery.id} type="button" className={"border bg-white focus:ring-4 focus:outline-none  rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 " + (selectedCategory == index ? "hover:text-white text-green-500 border-green-300 hover:bg-green-500 focus:ring-green-300" : "text-gray-900 border-white hover:border-gray-200 focus:ring-gray-300")} onClick={()=>selectCategory(index)}>{gallery.name}</button>
                        ))}
                    </div>
                
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {medias.map(media=>(
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src={media.url} alt={media.type}/>
                            </div>
                        ))}
                    </div>
                </>
            )}

      </div>

      <MyFooter />
    </>
  );
};
