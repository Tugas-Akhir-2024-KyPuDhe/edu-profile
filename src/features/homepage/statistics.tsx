import { UserGroupIcon } from "@heroicons/react/24/outline"
import { useRef } from "react"
import { useIsVisible } from "../../utils"

export const Statistics = () => {
    const ref1 = useRef(null)
    const isVisible1 = useIsVisible(ref1)

  return (
    <div ref={ref1} className={`py-16 px-6 md:px-24 lg:px-32 bg-green-300 grid grid-cols-2 gap-4 lg:grid-cols-4 transition ease-in duration-700 ${isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex flex-col items-center">
            <UserGroupIcon className="w-20 text-gray-700"/>
            <h5 className="mb-1 text-4xl font-medium text-gray-700">100</h5>
            <span className="text-xl font-medium text-gray-700">Siswa</span>
        </div>
        <div className="flex flex-col items-center">
            <UserGroupIcon className="w-20 text-gray-700"/>
            <h5 className="mb-1 text-4xl font-medium text-gray-700">50</h5>
            <span className="text-xl font-medium text-gray-700">Guru</span>
        </div>
        <div className="flex flex-col items-center">
            <UserGroupIcon className="w-20 text-gray-700"/>
            <h5 className="mb-1 text-4xl font-medium text-gray-700">300</h5>
            <span className="text-xl font-medium text-gray-700">Alumni</span>
        </div>
        <div className="flex flex-col items-center">
            <UserGroupIcon className="w-20 text-gray-700"/>
            <h5 className="mb-1 text-4xl font-medium text-gray-700">30</h5>
            <span className="text-xl font-medium text-gray-700">Staff</span>
        </div>
    </div>
  )
}
