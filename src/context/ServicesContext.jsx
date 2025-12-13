import React, { createContext, useContext } from 'react'
import { useServices } from '../hooks/useServices'
import { useCategories } from '../hooks/useCategories'

const ServicesContext = createContext(null)

export function ServicesProvider({ children }) {
  const { services, loading: servicesLoading, error: servicesError } = useServices()
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories()

  return (
    <ServicesContext.Provider value={{ 
      services, 
      categories,
      loading: servicesLoading || categoriesLoading,
      servicesError,
      categoriesError
    }}>
      {children}
    </ServicesContext.Provider>
  )
}

export function useServicesContext() {
  return useContext(ServicesContext)
}