
function Sidelogo({ src, name, count }: { src: string, name: string, count?: string }) {
    return (
        <div className="relative text-gray-500">

            <div className="flex  items-end">
                <img
                    className="w-7 "
                    src={src} alt="" />
                <h1>{name}</h1>
            </div>
            {count && <div className="absolute -top-1 left-3 size-4 text-center text-white rounded-full flex justify-center items-center bg-green-600">
                <p className="text-sm">{count}</p>
            </div>}
        </div>
    )
}

export default Sidelogo
