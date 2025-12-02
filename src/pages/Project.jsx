import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'


export default function Project() {
const { slug } = useParams()
const project = projects.find((p) => p.slug === slug)


if (!project) return <div className="pt-24 text-center">Project Not Found</div>


return (
<div className="pt-24 px-4 max-w-5xl mx-auto">
<h1 className="text-4xl font-bold mb-4">{project.title}</h1>
<p className="text-gray-400 mb-8 max-w-2xl">{project.description}</p>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{project.gallery.map((img, i) => (
<img key={i} src={img} className="rounded-xl border border-white/10" />
))}
</div>
</div>
)
}