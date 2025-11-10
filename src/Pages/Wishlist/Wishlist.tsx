import { useSelector, useDispatch } from "react-redux"
import useData from "../../Compomemts/Share/useData"
import type { RootState } from "../../Redux/store"
import RaringWithP from "../../Compomemts/Share/RaringWithP"
import PriceWithButton from "../../Compomemts/Share/PriceWithButton"
import { removeWishlist } from "../../Cart/counterSlice"
import { useNavigate } from "react-router"
type ProductData = {
    id: number,
    name: string,
    image1: string,
    currentPrice: number,
    rating: number,
    previousPrice: number
}
function Wishlist() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const totalWishilistWithId = useSelector((state: RootState) => state.counter.wishlistProductId) as number[]
    const { products = [] } = useData() as { products?: ProductData[] }


    const filterData = products.filter(item => totalWishilistWithId?.includes(item.id))

    if (!totalWishilistWithId || totalWishilistWithId.length === 0) {
        return (
            <h1 className="text-3xl text-center py-16 text-gray-600">Wishlist is Empty</h1>
        )
    }

    return (
        <div className="  py-16 space-y-8">
            {
                filterData && filterData.map(item => (
                    <div key={item.id} className="flex flex-col lg:flex-row justify-center items-center rounded-md gap-4 border border-gray-200">
                        <img className="w-50 rounded-md" src={item.image1} alt="" />
                        <div className=" lg:w-120">
                            <h1
                                onClick={() => navigate(`/shop/${item.id}`)}
                                className="text-2xl hover:cursor-pointer hover:text-green-600 font-[quicksand] font-semibold text-gray-600">{item.name}</h1>
                            <RaringWithP rating={item.rating} />
                            <div className=" w-50">
                                <PriceWithButton currentPrice={item.currentPrice} previousPrice={item.previousPrice} id={item.id} />
                            </div>
                        </div>
                        <div>
                            <button onClick={() => dispatch(removeWishlist(item.id))} className="bg-gray-200 text-red-500 my-5 lg:my-0 duration-500 hover:-translate-y-1 px-6 py-2 rounded-md text-xl font-bold">Remove</button>
                        </div>
                        <div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Wishlist
