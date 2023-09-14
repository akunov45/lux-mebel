import { Outlet } from 'react-router-dom'
import NavCategory from '../components/NavCategory/NavCategory'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { useSelector } from 'react-redux'

const Layout = () => {
  const { isHiddenNav } = useSelector(state => state.navbar)

  return (
    <div>
      <Header />
      <div className='container'>
        {!isHiddenNav && <NavCategory />}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout