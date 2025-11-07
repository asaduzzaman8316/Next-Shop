import { useState } from "react"
import Silder from "./Silder"
import Leftbox from "./Leftbox"

function DailyBestSells() {
    const [categories, setCategories] = useState('All')
    return (
        <div className='2xl:container mx-auto  py-12 lg-[80%]'>
            <div className="flex justify-between items-center pb-8">
                <h1 className="font-[quicksand] text-3xl font-bold text-gray-800 leading-2">Daily Best Sells</h1>
                <div className="flex gap-3 items-center font-[quicksand] font-semibold text-gray-600">
                    <p
                        className={`cursor-pointer hover:-translate-y-1 duration-500 hover:text-green-600`}
                        onClick={() => setCategories('sale')}
                    >Featured</p>
                    <p
                        className={`cursor-pointer hover:-translate-y-1 duration-500 hover:text-green-600`}
                        onClick={() => setCategories('hot')}
                    >Popular</p>
                    <p
                        className={`cursor-pointer hover:-translate-y-1 duration-500 hover:text-green-600`}
                        onClick={() => setCategories('new')}
                    >New added</p>
                </div>
            </div>

            <div className="grid grid-cols-12 items-center">
                <div className="col-span-3">
                    <Leftbox />
                </div>
                <div className="col-span-9  ">
                    <Silder label={categories} />
                </div>
            </div>
        </div>
    )
}

export default DailyBestSells
