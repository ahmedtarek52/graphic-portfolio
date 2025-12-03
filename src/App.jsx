import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AppRoutes from './routes/AppRoutes'
import useScrollToTop from './hooks/useScrollToTop'


export default function App() {
useScrollToTop()
return (
<div className="min-h-screen bg-white text-neutral-900">
<Navbar />
<main className="pt-20">
<AppRoutes />
</main>
<Footer />
</div>
)
}