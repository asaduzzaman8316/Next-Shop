import { IoCartOutline } from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../Cart/counterSlice'
import { toast } from "react-toastify"
import type { RootState } from "../../Redux/store"

function PriceWithButton({ id, currentPrice, previousPrice }: { id: number, currentPrice: number, previousPrice: number }) {
    const isLogin = useSelector((state: RootState) => state.counter.isLogin)
    const dispatch = useDispatch()
    function handlerClick() {
        if (isLogin) {
            dispatch(increment(id))
            toast("Add To Cart Successful", { position: 'top-right' })
        }
        else {
            toast.warn("Login First")
        }
    }
    return (
        <div className="flex  justify-between items-center mt-2">
            <p className="text-green-600 font-semibold">${currentPrice} <span className="line-through text-sm text-gray-400">${previousPrice}</span></p>
            <div
                onClick={handlerClick}
                className="flex items-center active:scale-110 cursor-pointer justify-center gap-2 bg-green-100 px-4 py-1 rounded-md hover:text-white hover:bg-green-600 hover:-translate-y-1 duration-500 text-green-600">
                <IoCartOutline />
                <button
                    className="cursor-pointer"
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default PriceWithButton
