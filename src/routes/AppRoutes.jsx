import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import CategoryPage from '../pages/CategoryPage'
import ServicePage from '../pages/ServicePage'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import AdminRoutes from "./AdminRoutes";

export default function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/categories" element={<Categories />} />
<Route path="/category/:slug" element={<CategoryPage />} />
<Route path="/service/:slug" element={<ServicePage />} />
<Route path="/about" element={<About />} />
<Route path="/admin/*" element={<AdminRoutes />} />
<Route path="/contact" element={<Contact />} />
	<Route path="/404" element={<NotFound />} />
	<Route path="*" element={<NotFound />} />
</Routes>
)
}