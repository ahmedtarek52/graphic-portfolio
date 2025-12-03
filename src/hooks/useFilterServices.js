import { useMemo } from 'react'
import { useServices } from '../context/ServicesContext'
import { useSearch } from '../context/SearchContext'


export default function useFilterServices() {
const { services } = useServices()
const { query, filters } = useSearch()


return useMemo(() => {
const q = query.trim().toLowerCase()
return services.filter((s) => {
if (filters.category !== 'all' && s.category !== filters.category) return false
if (s.price < filters.minPrice || s.price > filters.maxPrice) return false
if (!q) return true
const hay = `${s.title} ${s.description} ${s.tags?.join(' ')}`.toLowerCase()
return hay.includes(q)
})
}, [services, query, filters])
}