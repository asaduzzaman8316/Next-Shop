import { useState } from "react"
import ProductCard from "./ProductCard"
import useData from "../../Compomemts/Share/useData"

type categories = {
    id: number,
    name: string,
    image: string,
    color: string,
    totalItems: number
}

function PopularProductsHead() {
    const { categories } = useData()

    const [cid, setCid] = useState(0)
    const [btn, setBtn] = useState(0)

    function handleClick(id: number): void {
        setCid(id)
        setBtn(id)
    }

    function handleAll() {
        setCid(0)
        setBtn(0)
    }

    return (
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between justify-between gap-4 mb-4">
                <h1 className='font-[quicksand] font-bold text-2xl sm:text-3xl text-gray-700  '>Popular Products</h1>
                <div className=" sm:w-auto mt-2 sm:mt-0">
                    <div className="flex w-[90%] items-center gap-4 overflow-x-hidden no-scrollbar py-2">
                        <button
                            onClick={handleAll}
                            className={`${btn === 0 ? 'bg-green-50 text-green-600' : 'text-gray-600'} whitespace-nowrap px-3 py-1 rounded-full cursor-pointer transition-colors duration-200`}
                        >All</button>
                        {categories && categories.map((item: categories) => (
                            <button
                                onClick={() => handleClick(item.id)}
                                key={item.id}
                                className={`${btn === item.id ? 'bg-green-50 text-green-600' : 'text-gray-600'} whitespace-nowrap px-3 py-1 rounded-full cursor-pointer hover:bg-green-50 hover:text-green-600 transition-all duration-200`}
                            >{item.name}</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                <ProductCard id={cid} />
            </div>
        </div>
    )
}

export default PopularProductsHead
