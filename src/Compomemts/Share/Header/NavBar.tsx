
import NavLeft from './NavLeft'
import NavMenu from './NavMenu'

function NavBar() {
  return (
    <div className='border py-3 border-gray-200 sticky top-0'>
      <div className='2xl:container mx-auto lg:w[80%] flex items-center justify-between'>
        <NavLeft />
        <NavMenu />
      </div>
    </div>
  )
}

export default NavBar
