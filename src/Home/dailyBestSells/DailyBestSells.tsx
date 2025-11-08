import { useState } from "react"
import Silder from "./Silder"
import Leftbox from "./Leftbox"

function DailyBestSells() {
    const [categories, setCategories] = useState('All')
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 pb-6 sm:pb-8">
                <h1 className="font-[quicksand] text-2xl sm:text-3xl font-bold text-gray-800">Daily Best Sells</h1>
                <div className="flex flex-wrap gap-4 items-center font-[quicksand] font-semibold text-gray-600">
                    <button
                        className={`${categories === 'sale' ? 'text-green-600' : ''} cursor-pointer hover:text-green-600 transition-colors duration-300`}
                        onClick={() => setCategories('sale')}
                    >Featured</button>
                    <button
                        className={`${categories === 'hot' ? 'text-green-600' : ''} cursor-pointer hover:text-green-600 transition-colors duration-300`}
                        onClick={() => setCategories('hot')}
                    >Popular</button>
                    <button
                        className={`${categories === 'new' ? 'text-green-600' : ''} cursor-pointer hover:text-green-600 transition-colors duration-300`}
                        onClick={() => setCategories('new')}
                    >New added</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3">
                    <Leftbox />
                </div>
                <div className="lg:col-span-9">
                    <Silder label={categories} />
                </div>
            </div>
        </div>
    )
}

export default DailyBestSells
