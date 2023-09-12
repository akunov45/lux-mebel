import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import NavCategory from '../components/NavCategory/NavCategory'

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <NavCategory />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout