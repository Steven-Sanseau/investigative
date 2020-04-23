import React, { ReactElement } from 'react'

interface ThemeProviderProps {
  name: string
  setThemeName: React.Dispatch<any>
}
export const ThemeContext = React.createContext<ThemeProviderProps | null>(null)

export const ThemeProvider = ({
  children,
  value,
}: React.PropsWithChildren<{
  value: ThemeProviderProps
}>): ReactElement => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeProviderProps => {
  return React.useContext(ThemeContext)
}
