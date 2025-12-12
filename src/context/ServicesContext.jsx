import React, { createContext, useContext } from 'react'
import { useServices } from '../hooks/useServices'
import { useCategories } from '../hooks/useCategories'

const ServicesContext = createContext(null)

export function ServicesProvider({ children }) {
  const services = useServices()
  const categories = useCategories()

  return (
    <ServicesContext.Provider value={{ services, categories }}>
      {children}
    </ServicesContext.Provider>
  )
}

export function useServicesContext() {
  return useContext(ServicesContext)
}