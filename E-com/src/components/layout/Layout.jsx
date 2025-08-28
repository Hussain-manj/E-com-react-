import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar.jsx'

function Layout({children}) {
  return (
    <div>
    <Navbar/>
    <div className="mainContent min-h-screen">
        {children}
    </div>
    <Footer/>
    </div>

  )
}

export default Layout