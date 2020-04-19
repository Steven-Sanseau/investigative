import { coreTheme } from './core'
import { darkTheme } from './dark'
import { defaultTheme } from 'src/utils/native-styled'

export const createTheme = (theme: string): object => {
  const themeConfig = (theme: string): object => {
    switch (theme) {
      case 'dark':
        return darkTheme
      default:
        return coreTheme
    }
  }

  return { ...defaultTheme, ...coreTheme, ...themeConfig(theme) }
}
