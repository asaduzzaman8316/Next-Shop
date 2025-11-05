import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Card() {
    return (
        <div data-aos='fade-left' className='relative'>
            <img
            className='rounded-md'
             src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-11.png" alt="" />

            <div className='absolute top-[24%] left-[14%]'>
                <p className='text-gray-400'>Oganic</p>
                <h1 className='text-2xl font-[quicksand] font-semibold text-gray-700'>Save 17% <br /> on <span className='text-green-600'>Oganic</span> <br /> Juice</h1>
            </div>
        </div>
    )
}

export default Card
