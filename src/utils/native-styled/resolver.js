export function resolveShorthands({ aliases, theme }) {
  return Object.entries(aliases).reduce((all, [property, value]) => {
    const shorthand = theme ? theme.shorthands[property] : undefined

    if (shorthand) {
      const unfold = shorthand.reduce(
        (acc, style) => ({
          ...acc,
          [style]: value,
        }),
        {},
      )

      return { ...all, ...unfold }
    }
    return { ...all, [property]: value }
  }, {})
}

export function resolveAliases({ styles, theme }) {
  return Object.entries(styles).reduce((all, [property, value]) => {
    const alias = theme ? theme.aliases[property] : undefined

    if (alias) {
      return { ...all, [alias]: value }
    }
    return { ...all, [property]: value }
  }, {})
}
