import { useEffect } from 'react'
import { MyCard } from '../../../components'
import { ArticleService } from '../../../services'

export const News = () => {

  useEffect(()=>{
    created()
  }, [])

  async function created() {
    const response = await ArticleService().all();

    console.log(response)
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
    </div>
  )
}
