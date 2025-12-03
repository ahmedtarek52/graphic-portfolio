import React, { createContext, useState, useContext } from 'react'


const SearchContext = createContext(null)


export function SearchProvider({ children }) {
const [query, setQuery] = useState('')
const [filters, setFilters] = useState({ category: 'all', minPrice: 0, maxPrice: 9999 })


return (
<SearchContext.Provider value={{ query, setQuery, filters, setFilters }}>
{children}
</SearchContext.Provider>
)
}


export function useSearch() {
return useContext(SearchContext)
}