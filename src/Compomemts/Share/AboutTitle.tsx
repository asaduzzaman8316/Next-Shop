
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function AboutTitle(props: { title: string }) {
    return (
        <div data-aos='fade-down' className='gap-1 flex flex-col  items-center mt-16 text-4xl font-bold about-hero__title'>
            <h1>{props.title}</h1>
            <img
                width={150}
                height={10}
                src={'/wave.png'}
                alt='title style'
            />
        </div>
    )
}

export default AboutTitle
