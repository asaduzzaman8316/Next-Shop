import type { IconType } from "react-icons"


function Sidelogo({ Icon, name, count }: { Icon: IconType, name: string, count?: number }) {
    return (
        <div className="relative text-gray-500">

            <div className="flex items-end gap-1">
                <div className="text-2xl text-gray-800">
                    <Icon />
                </div>
                <h1>{name}</h1>
            </div>
            {count !== undefined && (<div className=" absolute -top-1 left-3 size-4 text-center text-white rounded-full flex justify-center items-center bg-green-600">
                <p className="text-sm">{count}</p>
            </div>)}
        </div>
    )
}

export default Sidelogo
