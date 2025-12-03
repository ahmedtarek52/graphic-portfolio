import { useServices } from '../../context/ServicesContext'
import CategoryCard from '../categories/CategoryCard'


export default function CategoriesGrid(){
const { categories } = useServices()
return (
<div className="max-w-7xl mx-auto px-4 py-10">
<h2 className="text-2xl font-semibold mb-6">Explore Categories</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
{categories.map(c=> <CategoryCard key={c.slug} category={c} />)}
</div>
</div>
)
}