import { coreTheme } from './core'
import { darkTheme } from './dark'

export const createTheme = (theme: string): object => {
  const themeConfig = (theme: string): object => {
    switch (theme) {
      case 'dark':
        return darkTheme
      default:
        return coreTheme
    }
  }

  return { ...coreTheme, ...themeConfig(theme) }
}
