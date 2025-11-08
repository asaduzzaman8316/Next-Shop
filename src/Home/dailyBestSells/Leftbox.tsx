import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Leftbox() {
    return (

                <div data-aos='fade-right' className='relative overflow-hidden rounded-xl group'>
                    <img
                        className='w-full object-cover aspect-3/4 sm:aspect-auto sm:h-[500px]'
                        src='https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-4.png'
                        alt="Bring nature into your home"
                    />
                    <div className='absolute inset-0 flex flex-col justify-center p-6 sm:p-8 lg:p-10 text-gray-700'>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-[quicksand] font-bold transform group-hover:-translate-y-1 duration-500 max-w-[80%]'>
                            Bring nature <br /> into your <br /> home
                        </h1>

                        <button className='inline-flex items-center mt-6 sm:mt-8 bg-[#51B877] text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition-all duration-300 group/btn'>
                            <span>Shop Now</span>
                            <i className='fas fa-arrow-right ml-2 group-hover/btn:ml-3 transition-all duration-300 text-sm'></i>
                        </button>
                    </div>
                </div>
    )
}

export default Leftbox
