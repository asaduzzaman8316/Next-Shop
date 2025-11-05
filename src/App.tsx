
import { Outlet } from "react-router"
import Header from "./Compomemts/Share/Header/Header"
import Footer from "./Compomemts/Share/Footer.tsx/Footer"


function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
