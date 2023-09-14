import { Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import HomePage from "../pages/HomePage/HomePage"
import ProductInfoPage from "../pages/ProductInfo/ProductInfoPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import AboutPage from "../pages/AboutPage/AboutPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductInfoPage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes