import { useEffect, useState } from 'react'
import { MyCard } from '../../../components'
import { ArticleService } from '../../../services'
import { Article } from '../../../interfaces'

export const News = () => {

  const [data, setData] = useState<Article[]>([])

  useEffect(()=>{
    created()
  }, [])

  async function created() {
    try {
      const response = await ArticleService().all()
      setData(response.data)
    } catch (error) {
      console.error(error)      
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map(article=><MyCard key={article.id} image={"https://flowbite-react.com/images/blog/image-1.jpg"} title={article.title} description={article.description} href={'/konten/berita/'+article.id} badge={article.type}/>)}
    </div>
  )
}
