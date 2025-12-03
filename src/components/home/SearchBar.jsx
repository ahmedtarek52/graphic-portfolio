import { useSearch } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom'


export default function SearchBar() {
const { query, setQuery, filters, setFilters } = useSearch()
const navigate = useNavigate()


function onSubmit(e) {
e.preventDefault()
// keep search global and go to categories or search results
// navigate('/categories')
console.log("helooo");


}


return (
<form onSubmit={onSubmit} className="w-full">
<div className="flex items-center bg-white border rounded overflow-hidden shadow-sm">
<input
value={query}
onChange={(e)=>setQuery(e.target.value)}
placeholder="Find a service (e.g. logo, website, ads...)"
className="flex-1 px-4 py-3 outline-none"
/>
<button type='submit' className="px-4 py-3 bg-indigo-600 text-white">Search</button>
</div>
</form>
)
}