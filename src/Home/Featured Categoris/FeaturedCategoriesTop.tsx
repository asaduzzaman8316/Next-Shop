

function FeaturedCategoriesTop() {
    return (
        <div className="flex justify-between items-center">
            <p className="text-3xl text-gray-800 font-bold font-[quicksand]">Featured Categories</p>
            <div className="flex gap-3 items-center">
                <div className=" size-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-400">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className=" size-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-400">
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategoriesTop
