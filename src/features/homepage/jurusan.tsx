import { useEffect, useRef, useState } from "react"
import { Fajusek } from "../../interfaces"
import { JurusanService } from "../../services"
import { Spinner } from "flowbite-react"
import { useIsVisible } from "../../utils"

export const Jurusan = () => {

    const [data, setData] = useState<Fajusek[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const ref1 = useRef(null)
    const isVisible1 = useIsVisible(ref1)
    
    useEffect(()=>{
        loadData()

        async function loadData() {
        setIsLoading(true)
        try {
            const response = await JurusanService().all()
            setData(response.data)
        } catch (error) {
            console.error(error)      
        }
        setIsLoading(false)
        }
    }, [])

    return <div ref={ref1} className={`transition ease-in duration-700 ${isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        {isLoading ? (
            <div className="m-auto">
                <Spinner size="lg"/>
            </div>
        ) : (
            <div className="container gap-10 flex flex-col py-20">
                <h2 className="text-3xl font-bold text-center uppercase text-gray-900">Jurusan</h2>

                {data.map(jurusan=>(
                    <div key={jurusan.id}>
                        <h3 className="text-lg font-medium">{jurusan.name}</h3>
                        <p>{jurusan.description}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
}
