
import LastService from '../Compomemts/Share/LastService'
import SubScribe from '../Compomemts/Share/Subscribe'
import DailyBestSells from './dailyBestSells/DailyBestSells'
import DealsOfDay from './DealsOfDay/DealsOfDay'
import FeaturedCategories from './Featured Categoris/FeaturedCategories'
import FourCategory from './FourCategory/FourCategory'
import Hero from './Hero/Hero'
import PopularProduct from './Popular Products/PopularProduct'
import ThreeCard from './ThreeCard/ThreeCard'

function Home() {
  return (
    <div className="px-4">
      <title>Asad Mart | Home</title>
      <Hero />
      <FeaturedCategories />
      {/* this is for three card section  */}
      <div className='2xl:container mx-auto lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <ThreeCard title='Everyday Fresh & Clean with Our Products' src='https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-1.png' />
        <ThreeCard title='Make your Breakfast Healthy and Easy' src='https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-2.png' />
        <ThreeCard title='The best Organic Products Online' src='https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-3.png' />
      </div>

      <PopularProduct />

      <DailyBestSells />

      <DealsOfDay />

      <FourCategory />
      <SubScribe src='banner-9.png' />

      <LastService />
    </div>
  )
}

export default Home
