import React from 'react'

export const ThemeContext = React.createContext(null)

export function ThemeProvider({ children, value }) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
