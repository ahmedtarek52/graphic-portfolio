import { useSearch } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useServices } from '../../context/ServicesContext'


export default function SearchBar() {
const { query, setQuery } = useSearch()
const navigate = useNavigate()
const { services, categories } = useServices()


function onSubmit(e) {
  e.preventDefault()
  const q = query.trim().toLowerCase()
  if(!q){
    navigate('/categories')
    return
  }

  // Try to find a matching category by slug or name
  const cat = categories.find(c=> c.slug===q || (c.name && c.name.toLowerCase().includes(q)))
  if(cat){
    navigate(`/category/${cat.slug}`)
    return
  }

  // Try to find a matching service by slug or title
  const svc = services.find(s=> s.slug===q || (s.title && s.title.toLowerCase().includes(q)))
  if(svc){
    navigate(`/service/${svc.slug}`)
    return
  }

  // fallback: go to categories with query param
  navigate(`/categories?q=${encodeURIComponent(query)}`)
}


return (
<form onSubmit={onSubmit} className="w-full max-w-3xl mx-auto">
  <div className="relative">
    <input
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      placeholder="Find a service (e.g. logo, website, ads...)"
      className="w-full pl-6 pr-20 py-4 bg-white rounded-full shadow-lg outline-none transition-all duration-300 hover:shadow-xl focus:shadow-xl text-base placeholder-gray-500"
    />
    <button 
      type='submit' 
      className=" absolute right-2 top-1/2 -translate-y-1/2 p-2  purple-gradient purple-gradient-hover text-white rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "

    >
      <Search size={20} />
    </button>
  </div>
</form>
)
}