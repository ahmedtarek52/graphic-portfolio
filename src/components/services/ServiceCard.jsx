import { Link } from 'react-router-dom'


export default function ServiceCard({ service }){
return (
<Link to={`/service/${service.slug}`} className="block bg-white rounded shadow overflow-hidden">
<img src={service.cover} alt={service.title} className="w-full h-44 object-cover" />
<div className="p-4">
<h3 className="font-semibold">{service.title}</h3>
<p className="text-sm text-neutral-500">{service.category}</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-indigo-600 font-bold">${service.price}</div>
<div className="text-sm text-neutral-500">{service.rating}⭐ ({service.orders})</div>
</div>
</div>
</Link>
)
}