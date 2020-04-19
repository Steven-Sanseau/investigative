// import { useTheme } from './ThemeContext'
import { useResponsiveProps } from './breakpoints'
import { getScaleValue } from './scale'
import { resolveShorthands, resolveAliases } from './resolver'
import { defaultTheme } from 'src/utils/native-styled/default'

export const Styled = (): {
  useStyling: () => (styles: object) => object
  setTheme: (object) => void
} => {
  let theme = defaultTheme

  const setTheme = (newTheme) => {
    theme = newTheme
  }

  const useStyling = (): ((styles: object) => object) => {
    // const theme = useTheme()

    const responsive = useResponsiveProps()

    return (styles: object) => {
      if (!styles) {
        return null
      }
      if (!theme) {
        return styles
      }

      const aliases = resolveAliases({ styles, theme })
      const shorthands = resolveShorthands({ aliases, theme })

      const resolvedStyles = Object.entries(shorthands).reduce(
        (all, [property, value]) => {
          const scale = theme.resolvers[property]

          return {
            ...all,
            [property]: getScaleValue({
              value: responsive(value),
              scale: theme.scales[scale],
            }),
          }
        },
        {},
      )

      return resolvedStyles
    }
  }
  return { useStyling, setTheme }
}
