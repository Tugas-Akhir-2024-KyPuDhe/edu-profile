import { UserIcon } from "@heroicons/react/16/solid"

export const Jurusan = () => {
  return (
    <div className='py-16 px-6 md:px-24 lg:px-32 bg-indigo-600 grid grid-cols-2 gap-4 lg:grid-cols-4'>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24" color="white" />
            <h5 className="mb-1 text-4xl font-medium text-white">120</h5>
            <span className="text-xl font-medium text-white">Teknik Komputer Jaringan</span>
        </div>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24" color="white" />
            <h5 className="mb-1 text-4xl font-medium text-white">120</h5>
            <span className="text-xl font-medium text-white">Teknik Komputer Jaringan</span>
        </div>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24" color="white" />
            <h5 className="mb-1 text-4xl font-medium text-white">120</h5>
            <span className="text-xl font-medium text-white">Teknik Komputer Jaringan</span>
        </div>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24" color="white" />
            <h5 className="mb-1 text-4xl font-medium text-white">120</h5>
            <span className="text-xl font-medium text-white">Teknik Komputer Jaringan</span>
        </div>
    </div>
  )
}
