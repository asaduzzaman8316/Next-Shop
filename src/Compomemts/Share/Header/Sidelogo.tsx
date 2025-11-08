import type { IconType } from "react-icons"
import { Link } from "react-router"


function Sidelogo({ Icon, name, count, nav }: { Icon: IconType, name: string, count?: number, nav:string }) {
    return (
        <Link to={nav} className="relative  text-gray-500">

            <div className="flex items-end gap-1 ">
                <div className="text-2xl text-gray-500">
                    <Icon />
                </div>
                <h1 className="hidden lg:block">{name}</h1>
            </div>
            {count !== undefined && (<div className=" absolute -top-2 left-3 size-5 text-xs font-normal text-center text-white rounded-full flex justify-center items-center bg-green-600">
                <p className="text-sm">{count}</p>
            </div>)}
        </Link>
    )
}

export default Sidelogo
