import { Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import AboutPage from "../pages/AboutPage/AboutPage"
import HomePage from "../pages/HomePage/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import ProductInfoPage from "../pages/ProductInfo/ProductInfoPage"
import ContactPage from "../pages/ContactPage/ContactPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductInfoPage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes