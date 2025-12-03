import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Categories from '../pages/Categories'
import CategoryPage from '../pages/CategoryPage'
import ServicePage from '../pages/ServicePage'
import About from '../pages/About'
import Contact from '../pages/Contact'


export default function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/categories" element={<Categories />} />
<Route path="/category/:slug" element={<CategoryPage />} />
<Route path="/service/:slug" element={<ServicePage />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
)
}