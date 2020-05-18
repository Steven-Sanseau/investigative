import React, { ReactElement } from 'react'

const ThemeContext = React.createContext(null)

export function ThemeProvider({ children, theme }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
