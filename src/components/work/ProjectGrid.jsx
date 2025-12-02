import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'


export default function ProjectGrid() {
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{projects.map((project) => (
<ProjectCard key={project.slug} project={project} />
))}
</div>
)
}