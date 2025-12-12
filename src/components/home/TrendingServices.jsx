import { useServicesContext } from '../../context/ServicesContext'
import ServiceCard from '../services/ServiceCard'


export default function TrendingServices(){
const { services } = useServicesContext()
const trending = services.slice(0,6)
return (
<section className="max-w-7xl mx-auto px-4 py-10">
<h2 className="text-2xl font-semibold mb-6">Trending Services</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{trending.map(s=> <ServiceCard key={s.slug} service={s} />)}
</div>
</section>
)
}