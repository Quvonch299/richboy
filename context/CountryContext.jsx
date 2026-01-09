'use client'
import { createContext, useContext, useState } from 'react'

const CountryContext = createContext()

export function CountryProvider({ children }) {
  const [country, setCountry] = useState('dubai')

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  )
}

export function useCountry() {
  return useContext(CountryContext)
}
