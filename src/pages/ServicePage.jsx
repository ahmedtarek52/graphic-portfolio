import { useParams } from 'react-router-dom'
import { services } from '../data/services'
import ServiceDetails from '../components/services/ServiceDetails'


export default function ServicePage(){
const { slug } = useParams()
const service = services.find(s=>s.slug===slug)
if(!service) return <div className="pt-24 text-center">Service not found</div>
return (
<div className="max-w-7xl mx-auto">
<ServiceDetails service={service} />
</div>
)
}