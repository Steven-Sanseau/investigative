import { coreTheme } from './core'
import { darkTheme } from './dark'
import { defaultTheme } from 'src/utils/native-styled'

export const createTheme = (theme: string): any => {
  const themeConfig = (theme: string): object => {
    switch (theme) {
      case 'dark':
        return darkTheme
      default:
        return coreTheme
    }
  }

  return {
    ...defaultTheme,
    scales: { ...coreTheme, ...themeConfig(theme) },
  }
}
