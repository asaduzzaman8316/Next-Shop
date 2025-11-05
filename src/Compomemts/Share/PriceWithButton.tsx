import { IoCartOutline } from "react-icons/io5"


function PriceWithButton({ currentPrice, previousPrice }: { currentPrice: number, previousPrice: number }) {
    return (
        <div className="flex  justify-between items-center mt-2">
            <p className="text-green-600 font-semibold">${currentPrice} <span className="line-through text-sm text-gray-400">${previousPrice}</span></p>
            <div className="flex items-center justify-center gap-2 bg-green-100 px-4 py-1 rounded-md hover:text-white hover:bg-green-600 hover:-translate-y-1 duration-500 text-green-600">
                <IoCartOutline />
                <button>
                    Add
                </button>
            </div>
        </div>
    )
}

export default PriceWithButton
