import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Leftbox() {
    return (

                <div data-aos='fade-right' className='relative '>
                    <img
                        className='rounded-xl object-cover h-120  '
                        src='https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-4.png' alt="" />
                    <div className='absolute top-10 px-10 w-[95%] text-gray-700'>
                        <h1
                            className={`text-4xl font-[quicksand] font-bold hover:-translate-y-1 duration-500`}
                        >
                            Bring nature <br /> into your <br /> home
                        </h1>

                        <button
                            className='mt-30 flex justify-between  items-center bg-[#51B877] text-white px-4 hover:pr-6 duration-500 group py-1.5 hover:bg-yellow-500 rounded-md'
                        >
                            Shop Now
                            <i className='fas fa-arrow-right group-hover:pl-4 duration-500 pl-2 text-sm'></i>
                        </button>
                    </div>
                </div>
    )
}

export default Leftbox
