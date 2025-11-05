

function CategoryCards({ title, src, count }: { title: string, src: string, count: number }) {
    return (
        <div className='flex justify-between border  border-gray-200 px-4 py-2 rounded-md '>
            <div className="flex items-center text-start gap-5">
                <img
                    width={25}
                    src={src} alt="" />
                <h1 className='text-gray-600 text-sm'>{title}</h1>
            </div>
            <div className='text-sm text-gray-600 bg-green-200 size-6 rounded-full flex justify-center items-center'>{count}</div>
        </div>
    )
}

export default CategoryCards
