import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function ThreeCard({title, src}:{title:string, src:string}) {
    return (
        <div data-aos='fade-left' className='relative'>
            <img 
            className='rounded-xl'
            src={src} alt="" />
            <div className='absolute top-20 px-10 w-[80%] text-gray-700'>
                <h1
                    className={`text-2xl font-[quicksand font-bold hover:-translate-y-1 duration-500`}
                >
                    {title}
                </h1>

                <button
                className='mt-10 flex justify-between  items-center bg-[#51B877] text-white px-4 hover:pr-6 duration-500 group py-1.5 hover:bg-yellow-500 rounded-md'
                >
                    Shop Now
                    <i className='fas fa-arrow-right group-hover:pl-4 duration-500 pl-2 text-sm'></i>
                </button>
            </div>
        </div>
    )
}

export default ThreeCard
