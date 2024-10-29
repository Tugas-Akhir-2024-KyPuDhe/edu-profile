import { MyCard } from '../../../components'

export const News = () => {
  return (
    <div className="px-6 md:px-24 lg:px-32 py-16">
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
      </div>
  )
}