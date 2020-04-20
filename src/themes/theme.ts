import { coreTheme } from './core'
import { darkTheme } from './dark'
import { defaultTheme } from 'src/utils/native-styled'
import { StaticTheme } from 'src/utils/native-styled/ThemeContext'

export const createTheme = (theme: string): StaticTheme => {
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
    //@ts-ignore
    scales: { ...coreTheme, ...themeConfig(theme) },
  }
}
