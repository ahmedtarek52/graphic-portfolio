import { useSearch } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'


export default function SearchBar() {
const { query, setQuery } = useSearch()
const navigate = useNavigate()


function onSubmit(e) {
  e.preventDefault()
  // Navigate to categories page with search query
  navigate('/categories')
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