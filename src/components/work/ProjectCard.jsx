import { Link } from 'react-router-dom'


export default function ProjectCard({ project }) {
return (
<Link to={`/work/${project.slug}`} className="group block">
<div className="overflow-hidden rounded-xl border border-white/10">
<img
src={project.cover}
className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
/>
</div>
<h3 className="text-xl mt-4 font-semibold">{project.title}</h3>
<p className="text-gray-400 text-sm">{project.category}</p>
</Link>
)
}