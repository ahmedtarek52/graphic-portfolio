import { useParams } from 'react-router-dom'
import { useServices } from '../context/ServicesContext'
import ServiceCard from '../components/services/ServiceCard'


export default function CategoryPage(){
const { slug } = useParams()
const { services, categories } = useServices()
const category = categories.find(c=>c.slug===slug)
const list = services.filter(s=>s.category===slug)


if(!category) return <div className="pt-24 text-center">Category not found</div>


return (
<div className="max-w-7xl mx-auto px-4 py-10">
<div className="flex items-center gap-6">
<img src={category.banner} alt={category.name} className="w-28 h-28 object-cover rounded" />
<div>
<h1 className="text-3xl font-bold">{category.name}</h1>
<p className="text-neutral-600">Services under {category.name}</p>
</div>
</div>


<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{list.map(s=> <ServiceCard key={s.slug} service={s} />)}
</div>
</div>
)
}