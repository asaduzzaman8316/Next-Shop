import { useState } from 'react'
import CheckBox from './CheckBox'
import { CiFilter } from 'react-icons/ci'

function FillByPrice() {
    const [range, setRange] = useState('16')
    return (
        <div>
            <div className='border-gray-200 p-4 shadow-xl border rounded-md'>
                <h1 className='text-2xl peer relative font-[quicksand] font-bold text-gray-700 border-b border-b-gray-300 pb-4'>Fill by Price</h1>
                <div className='peer-absolute w-[25%] bottom-0.5  h-0.5 bg-green-500'></div>


                <div className='mt-4'>
                    <input
                        className='text-green-600'
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                        type="range" />
                    <p className='text-gray-400'>To:  <span className='text-green-600'>${range}</span></p>

                    <div className='space-y-4 relative'>
                        <CheckBox h1='Color' cl1='Red' cnt1={56} cl2='Green' cnt2={78} cl3='Blue' cnt3={54} />

                        <CheckBox h1='Item Condition' cl1='New' cnt1={1506} cl2='Refurbished' cnt2={27} cl3='Used' cnt3={60} />
                        <div className='flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-1.5 w-[50%] rounded-md hover:bg-yellow-500 hover:w-[52%] duration-500 transition-all'>
                            <CiFilter />
                            <button>
                                Filter</button>
                        </div>

                        <img
                            className='w-30 absolute -bottom-8 -right-3'
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/fillter-widget-bg.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FillByPrice
