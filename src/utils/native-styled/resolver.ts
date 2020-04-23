import { StaticTheme } from './ThemeContext'

export function resolveShorthands({
  aliases,
  theme,
}: {
  aliases: {}
  theme: StaticTheme
}): object {
  return Object.entries(aliases).reduce((all, [property, value]) => {
    const shorthand = theme?.shorthands[property]

    if (shorthand) {
      const unfold = shorthand.reduce(
        (a, s) => ({
          ...a,
          [s]: value,
        }),
        {},
      )

      return { ...all, ...unfold }
    }
    return { ...all, [property]: value }
  }, {})
}

export function resolveAliases({
  styles,
  theme,
}: {
  styles: object
  theme: StaticTheme
}): object {
  return Object.entries(styles).reduce((all, [property, value]) => {
    const alias = theme?.aliases[property]

    if (alias) {
      return { ...all, [alias]: value }
    }
    return { ...all, [property]: value }
  }, {})
}