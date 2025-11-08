import AOS from 'aos';
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router';
AOS.init()
function ThreeCard({title, src}:{title:string, src:string}) {
    const navigate = useNavigate()
    return (
        <div data-aos='fade-left' className='relative group overflow-hidden rounded-xl'>
            <img 
                className='rounded-xl w-full h-auto object-cover'
                src={src} 
                alt={title}
            />
            <div className='absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-gray-700'>
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-[quicksand] font-bold transform group-hover:-translate-y-1 duration-500'>
                    {title}
                </h1>

                <button
                    onClick={() => navigate('/shop')}
                    className='inline-flex items-center self-start mt-4 sm:mt-6 bg-[#51B877] text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition-all duration-300 group/btn'
                >
                    <span>Shop Now</span>
                    <i className='fas fa-arrow-right ml-2 group-hover/btn:ml-3 transition-all duration-300 text-sm'></i>
                </button>
            </div>
        </div>
    )
}

export default ThreeCard
