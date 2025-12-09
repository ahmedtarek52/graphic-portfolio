import { Link } from 'react-router-dom'


export default function ServiceCard({ service }){
return (
<Link 
  to={`/service/${service.slug}`} 
  className="  block bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
  <img 
    src={service.cover} 
    alt={service.title} 
    loading="lazy"
    className="w-full h-80 object-cover" 
  />
  <div className="p-4">
    <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
    <p className="text-sm text-neutral-500 mb-2">{service.description}</p>
    {/* <div className="flex items-center justify-between">
      <div className="text-primary font-bold text-lg">${service.price}</div>
      <div className="flex items-center gap-1">
        <span className="text-sm text-neutral-500">{service.rating}</span>
        <span className="text-yellow-400">★</span>
        <span className="text-sm text-neutral-500">({service.revisions})</span>
      </div>
    </div> */}
  </div>
</Link>
)
}