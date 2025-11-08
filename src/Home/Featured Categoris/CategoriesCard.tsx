
import useData from "../../Compomemts/Share/useData"
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
type categories = {
    id: number,
    name: string,
    image: string,
    color: string,
    totalItems: number
}
function CategoriesCard() {

    const {categories} = useData()



    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 mt-10 overflow-hidden">
            {
                categories.map((item: categories) => (
                    <div data-aos='fade-up' data-aos-delay={`${100 * item.id}`} key={item.id} className="flex items-center justify-center">
                        <div className={`p-3 text-center ${item.color} font-[quicksand] rounded-lg group border border-white hover:border-green-200 duration-500 transition-all hover:shadow-md w-full max-w-xs`}>
                            <img
                                className="mx-auto mb-3 w-20 h-20 sm:w-24 sm:h-24 object-contain hover:scale-105 duration-500 ease-in-out"
                                src={item.image} alt="" />
                            <div>
                                <h1 className='text-gray-800 font-semibold line-clamp-1 group-hover:text-green-600 duration-300'>{item.name}</h1>
                                <p className='text-sm text-gray-600'>{item.totalItems} Items</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoriesCard
