import React, { ReactElement } from 'react'
export const ThemeContext = React.createContext<object | null>(null)

interface ThemeProviderProps {
  value: object
}
export const ThemeProvider = ({
  children,
  value,
}: React.PropsWithChildren<ThemeProviderProps>): ReactElement => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  return React.useContext(ThemeContext)
}
