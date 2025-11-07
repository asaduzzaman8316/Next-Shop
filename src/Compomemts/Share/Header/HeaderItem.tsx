import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import Search from "./Search";
import { CiLocationOn } from "react-icons/ci";
import Sidelogo from "./Sidelogo";
import { useSelector } from "react-redux";
import type { RootState } from "../../../Redux/store";


function HeaderItem() {
    const count = useSelector((state: RootState) => state.counter.value)
    return (
        <div className="2xl:container lg:w[80%] mx-auto py-8 flex justify-between items-center">
            <div className="w-50">
                <img src="/logo.svg" alt="" />
            </div>
            <div className="w-150">
                <Search />
            </div>
            <div className="border flex items-center px-4 py-2 rounded-lg border-gray-300 gap-1">
                <CiLocationOn />
                <p className="text-green-600 text-sm">Your Location <i className="fas fa-angle-down text-gray-600 text-xs"></i></p>
            </div>
            <div className="flex items-center gap-5">
                <Sidelogo nav="./compare" Icon={IoIosGitCompare } name="Compare" count={count} />
                <Sidelogo nav="/wishlist" Icon={FaRegHeart } name="Wishlist" count={count} />
                <Sidelogo nav="/addtocart" Icon={IoCartOutline } name="Cart" count={count} />
                <Sidelogo nav="/compare" Icon={FaRegUser } name="Compare" />
            </div>
        </div>
    )
}

export default HeaderItem
