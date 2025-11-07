import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function Right() {
  return (
    <div data-aos='fade-left'>
      <h1 className="text-2xl  font-bold text-gray-800 pb-5  font-[quicksand]">Install App</h1>
      <p className='text-sm text-gray-600 '>From App Store or Google Play</p>

      <div className='flex gap-2 mb-8 mt-5'>
        <img
          className='w-28'
          src="/app-store.jpg" alt="" />
        <img
          className='w-28'
          src="/google-play.jpg" alt="" />
      </div>
      <p className='text-sm pb-5 text-gray-600'>Secured Payment Gateways</p>
      <img src="/payment-method.png" alt="" />
    </div>
  )
}

export default Right
