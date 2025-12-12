import { useMemo } from 'react'
import { useServicesContext } from '../context/ServicesContext'
import { useSearch } from '../context/SearchContext'


export default function useFilterServices() {
const { services } = useServicesContext()
const { query, filters } = useSearch()


return useMemo(() => {
const q = query.trim().toLowerCase()
return services.filter((s) => {
if (filters.category !== 'all' && s.category !== filters.category) return false
if (s.price < filters.minPrice || s.price > filters.maxPrice) return false
if (!q) return true
// Updated to use shortDescription instead of description and handle missing tags
const hay = `${s.title} ${s.shortDescription || ''}`.toLowerCase()
return hay.includes(q)
})
}, [services, query, filters])
}