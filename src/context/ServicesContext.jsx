import React, { createContext, useState, useContext } from 'react'
import { services as servicesData } from '../data/services'
import { categories as categoriesData } from '../data/categories'


const ServicesContext = createContext(null)


export function ServicesProvider({ children }) {
const [services] = useState(servicesData)
const [categories] = useState(categoriesData)


return (
<ServicesContext.Provider value={{ services, categories }}>
{children}
</ServicesContext.Provider>
)
}


export function useServices() {
return useContext(ServicesContext)
}