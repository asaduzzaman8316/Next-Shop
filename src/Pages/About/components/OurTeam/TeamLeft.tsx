import Heading from "../../../../Compomemts/Share/Heading"
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()

function TeamLeft() {
    return (
        <div data-aos='zoom-in-up'>
            <div className=''>
                <p className='text-lg text-green-600 tracking-tight'>Our Team</p>
                <Heading title='Meet Our Expert Team' size='text-5xl' />
                <p className='py-5 text-gray-600'>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                <p className='text-gray-600 pb-8'>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                <button className='bg-green-600 px-8 py-4 text-white rounded-lg hover:bg-yellow-500 duration-500 text-lg font-semibold'>VIew All Members</button>
            </div>
        </div>
    )
}

export default TeamLeft
