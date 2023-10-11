import { Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import AboutPage from "../pages/AboutPage/AboutPage"
import HomePage from "../pages/HomePage/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import ProductInfoPage from "../pages/ProductInfo/ProductInfoPage"
import ContactPage from "../pages/ContactPage/ContactPage"
import CartPage from "../pages/CartPage/CartPage"
import FavPage from "../pages/FavPage/FavPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductInfoPage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/favourite' element={<FavPage/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes