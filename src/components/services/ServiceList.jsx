import ServiceCard from './ServiceCard'
import useFilterServices from '../../hooks/useFilterServices'


export default function ServiceList(){
const results = useFilterServices()
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{results.map(s => <ServiceCard key={s.slug} service={s} />)}
</div>
)
}