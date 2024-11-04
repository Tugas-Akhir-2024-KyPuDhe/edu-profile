import { useParams } from "react-router-dom";
import {Header, MyBanner, MyFooter} from "../../../components";
import { useEffect, useState } from "react";
import { ArticleService } from "../../../services";
import { Article } from "../../../interfaces";
import { Badge, Spinner } from "flowbite-react";
import { showFormattedDate } from "../../../utils";

export const DetailBerita = () => {

  const {id} = useParams();
  const [data, setData] = useState<Article>()

  useEffect(()=>{
      created()

      async function created() {
        try {
          const response = await ArticleService().single(parseInt(id!))
          setData(response.data)
        } catch (error) {
          console.error(error)      
        }
      }

  }, [id])

  return (
    <>
      <Header />
      <MyBanner title={"Detail Berita"} currentPage="Detail Berita" beforePages={[{title: "Beranda", href: "/"}, {title: "Berita", href: "/konten/berita"}, ]} />
      
      <div className="container py-10 gap-5 flex flex-col min-h-[40vh]">
        {data ? (
          <>
            <div className="flex gap-3 mx-auto items-center">
              <Badge>{data.type}</Badge>
              <span>{showFormattedDate(data.createdAt)}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-xl text-center">{data.title}</h2>
            <p className="text-md text-gray-900 text-center">{data.description}</p>
          </>
          ) : (
            <div className="m-auto">
              <Spinner className="text-center" size="lg"/>
            </div>
          )
        }
      </div> 

      <MyFooter />
    </>
  );
};

