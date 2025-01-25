import { useEffect, useRef, useState } from "react"
import { useIsVisible } from "../../utils"
import { FaUserGraduate, FaUsers, FaUserSecret, FaUserTie } from "react-icons/fa6"
import SchoolService from "../../services/school"
import { Statistic } from "../../interfaces"

export const Statistics = () => {
    const ref1 = useRef(null)
    const isVisible1 = useIsVisible(ref1)
    const [data, setData] = useState<Statistic>()

    useEffect(()=>{
        loadData()

        async function loadData() {
        try {
            const response = await SchoolService().statistics()
            setData(response.data)
        } catch (error) {
            console.error(error)      
        }
        }
    }, [])

  return (
    <div ref={ref1} className={`py-16 px-6 md:px-24 lg:px-32 bg-[#1E7DC1] grid grid-cols-2 gap-4 lg:grid-cols-4 transition ease-in duration-700 ${isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex flex-col items-center">
            <FaUsers size={30} className="text-slate-100"/>
            <h5 className="mb-1 text-4xl font-medium text-slate-100">{data?.student}</h5>
            <span className="text-xl font-medium text-slate-100">Siswa</span>
        </div>
        <div className="flex flex-col items-center">
            <FaUserSecret size={30} className="text-slate-100"/>
            <h5 className="mb-1 text-4xl font-medium text-slate-100">{data?.teacher}</h5>
            <span className="text-xl font-medium text-slate-100">Guru</span>
        </div>
        <div className="flex flex-col items-center">
            <FaUserGraduate size={30} className="text-slate-100"/>
            <h5 className="mb-1 text-4xl font-medium text-slate-100">{data?.alumni}</h5>
            <span className="text-xl font-medium text-slate-100">Alumni</span>
        </div>
        <div className="flex flex-col items-center">
            <FaUserTie size={30} className="text-slate-100"/>
            <h5 className="mb-1 text-4xl font-medium text-slate-100">{data?.staff}</h5>
            <span className="text-xl font-medium text-slate-100">Staff</span>
        </div>
    </div>
  )
}
