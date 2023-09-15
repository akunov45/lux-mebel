import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import NavCategory from '../components/NavCategory/NavCategory'
import Footer from './Footer/Footer'
import Header from './Header/Header'

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