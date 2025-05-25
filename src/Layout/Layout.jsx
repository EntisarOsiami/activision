import { Outlet } from "react-router";
import Navbar from "../Components/Nav-Footer/Navbar";
import Footer from "../Components/Nav-Footer/Footer";




function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="flex-shrink-0" />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer className="flex-shrink-0" />
    </div>
  )
}

export default Layout