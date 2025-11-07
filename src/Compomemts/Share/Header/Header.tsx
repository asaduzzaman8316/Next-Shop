
import HeaderTop from "./HeaderTop";
import HeaderItem from "./HeaderItem";
import NavBar from "./NavBar";
import { ToastContainer } from "react-toastify";


function Header() {
  return (
    <div className="relative">
      <HeaderTop />
      <HeaderItem />
      <NavBar />
      <ToastContainer />
    </div>

  )
}

export default Header

