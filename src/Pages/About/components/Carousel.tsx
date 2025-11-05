import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className='  gap-3'>
            <Slider {...settings}>
                <div data-aos="zoom-in" className="px-2">
                    <img
                        className='rounded-md'
                        width={200}
                        height={200}
                        src={'https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png'}
                        alt='carosuel-01'
                    />
                </div>
                <div data-aos='zoom-in'  className="px-2" >
                    <img
                        className='rounded-md'
                        width={200}
                        height={200}
                        src={'https://nest-frontend-v6.vercel.app/assets/imgs/page/about-4.png'}
                        alt='carosuel-01'
                    />
                </div>
                <div data-aos="zoom-in" className="px-2">
                    <img
                        className='rounded-md'
                        width={200}
                        height={200}
                        src={'https://nest-frontend-v6.vercel.app/assets/imgs/page/about-3.png'}
                        alt='carosuel-01'
                    />
                </div>
                <div data-aos="zoom-in" className="px-2">
                    <img
                        className='rounded-md'
                        width={200}
                        height={200}
                        src={'https://nest-frontend-v6.vercel.app/assets/imgs/page/about-4.png'}
                        alt='carosuel-01'
                    />
                </div>
                <div data-aos="zoom-in" className="px-2">
                    <img
                        className='rounded-md'
                        width={200}
                        height={200}
                        src={'https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png'}
                        alt='carosuel-01'
                    />
                </div>

            </Slider>

        </div>
    )
}

export default Carousel
