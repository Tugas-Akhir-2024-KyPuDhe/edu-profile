import { UserIcon } from "@heroicons/react/16/solid"

export const Statistics = () => {
  return (
    <div className='py-16 px-6 md:px-24 lg:px-32 bg-green-300 grid grid-cols-2 gap-4 lg:grid-cols-4'>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24 text-gray-700"/>
            <h5 className="mb-1 text-4xl font-medium text-gray-700">120</h5>
            <span className="text-xl font-medium text-gray-700">Siswa</span>
        </div>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24 text-gray-700"/>
            <h5 className="mb-1 text-4xl font-medium text-gray-700">120</h5>
            <span className="text-xl font-medium text-gray-700">Guru</span>
        </div>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24 text-gray-700"/>
            <h5 className="mb-1 text-4xl font-medium text-gray-700">120</h5>
            <span className="text-xl font-medium text-gray-700">Alumni</span>
        </div>
        <div className="flex flex-col items-center">
            <UserIcon className="w-24 text-gray-700"/>
            <h5 className="mb-1 text-4xl font-medium text-gray-700">120</h5>
            <span className="text-xl font-medium text-gray-700">Staff</span>
        </div>
    </div>
  )
}
