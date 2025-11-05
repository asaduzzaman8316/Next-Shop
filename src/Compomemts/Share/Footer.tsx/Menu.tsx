
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Menu({ props, title }: { props: string[], title: string }) {
    return (
        <div data-aos='fade-up'>
            <h1 className="text-2xl  font-bold text-gray-800 pb-5  font-[quicksand]">{title}</h1>
            <div className="text-sm text-gray-600 space-y-4">
                {
                    props.map((item, idx) => (
                        <h1 key={idx}>{item}</h1>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu
