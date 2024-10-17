import { UserIcon } from "@heroicons/react/16/solid"

export const Statistics = () => {
  return (
    <div className='py-16 px-6 md:px-24 lg:px-32 bg-green-400 grid grid-cols-2 gap-4 lg:grid-cols-4'>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24" color="white" />
            <h5 className="mb-1 text-4xl font-medium text-white">120</h5>
            <span className="text-xl font-medium text-white">Siswa</span>
        </div>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24" color="white" />
            <h5 className="mb-1 text-4xl font-medium text-white">120</h5>
            <span className="text-xl font-medium text-white">Guru</span>
        </div>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24" color="white" />
            <h5 className="mb-1 text-4xl font-medium text-white">120</h5>
            <span className="text-xl font-medium text-white">Alumni</span>
        </div>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24" color="white" />
            <h5 className="mb-1 text-4xl font-medium text-white">120</h5>
            <span className="text-xl font-medium text-white">Staff</span>
        </div>
    </div>
  )
}
