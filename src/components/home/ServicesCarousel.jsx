import useCarousel from '../../hooks/useCarousel'
import { useServicesContext } from '../../context/ServicesContext'


export default function ServicesCarousel() {
const { services } = useServicesContext()
const featured = services.slice(0, 5)
const { index } = useCarousel(featured, 3500)


if (!featured.length) return null


const s = featured[index]
return (
<div className="relative h-72 bg-neutral-50">
<img src={s.cover} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
<div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded shadow">
<h3 className="font-semibold">{s.title}</h3>
<p className="text-sm text-neutral-600">{s.description}</p>
<div className="mt-2 flex gap-2 items-center">
<span className="text-indigo-600 font-bold">${s.price}</span>
<span className="text-sm text-neutral-500">• {s.rating}⭐</span>
</div>
</div>
</div>
)
}