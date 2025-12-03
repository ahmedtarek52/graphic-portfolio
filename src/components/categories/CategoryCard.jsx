import { Link } from 'react-router-dom'


export default function CategoryCard({ category }){
return (
<Link to={`/category/${category.slug}`} className="flex flex-col items-center gap-2 p-4 bg-white rounded shadow hover:shadow-md">
<img src={category.icon} alt={category.name} className="w-12 h-12" />
<div className="text-sm font-medium">{category.name}</div>
</Link>
)
}