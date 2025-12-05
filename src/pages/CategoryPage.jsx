import { useParams } from 'react-router-dom'
import { useServices } from '../context/ServicesContext'
import ServiceCard from '../components/services/ServiceCard'
import Banner from '../components/ui/Banner'

export default function CategoryPage(){
const { slug } = useParams()
const { services, categories } = useServices()
const category = categories.find(c=>c.slug===slug)
const list = services.filter(s=>s.category===slug)


if(!category) return <div className="pt-24 text-center">Category not found</div>


return (
<div className="max-w-7xl mx-auto">

<Banner
  bg={category.banner}
  title={category.name}
  description="Explore services available in this category."
/>




<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{list.map(s=> <ServiceCard key={s.slug} service={s} />)}
</div>
</div>
)
}