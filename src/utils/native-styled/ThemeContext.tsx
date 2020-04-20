import React, { ReactElement, CSSProperties } from 'react'
import { ValueOf } from 'type-fest'

export interface ScaleTokens<T extends keyof CSSProperties> {
  [key: string]: NonNullable<CSSProperties[T]> | NonNullable<CSSProperties[T]>[]
}

export interface CommonTheme {
  breakpoints: {
    [key: string]: keyof string
  }
  shorthands: { [key: string]: ReadonlyArray<keyof CSSProperties> }
  aliases: {
    [key: string]: keyof CSSProperties
  }
}

export interface Scales {
  scales: {
    spaces: ScaleTokens<'margin'>
    sizes: ScaleTokens<'width'>
    fontFamily: ScaleTokens<'fontFamily'>
    fontSizes: ScaleTokens<'fontSize'>
    fontWeights: ScaleTokens<'fontWeight'>
    lineHeight: ScaleTokens<'lineHeight'>
    colors: ScaleTokens<'color'>
    letterSpacing: ScaleTokens<'letterSpacing'>
    border: ScaleTokens<'border'>
    borderWidth: ScaleTokens<'borderWidth'>
    radius: ScaleTokens<'borderRadius'>
    shadow: ScaleTokens<'boxShadow'>
    opacity: ScaleTokens<'opacity'>
    zIndex: ScaleTokens<'zIndex'>
    duration: ScaleTokens<'animationDuration'>
  }
}

type AnyIfEmpty<T extends object> = keyof T extends never ? any : T

export type ThemeOrAny = AnyIfEmpty<{}>

type ResolveShorthand<T> = T extends keyof ThemeOrAny['shorthands']
  ? ValueOf<ThemeOrAny['shorthands'][T], number>
  : T

type ResolveAlias<T> = ResolveShorthand<
  T extends keyof ThemeOrAny['aliases'] ? ThemeOrAny['aliases'][T] : T
>

export type ThemedStyle = {
  // Autocomplete for themed values, aliases and shorthands
  [key in Extract<
    | keyof ThemeOrAny['aliases']
    | keyof ThemeOrAny['shorthands']
    | keyof ThemeOrAny['resolvers'],
    string
  >]?:
    | keyof ThemeOrAny['scales'][ThemeOrAny['resolvers'][ResolveAlias<key>]]

    // Allow non-themed CSS values
    // TODO: Replace literal union hack, see https://github.com/microsoft/TypeScript/issues/29729
    | (CSSProperties[ResolveAlias<key>] & {})
}

export interface StaticTheme extends CommonTheme, Scales {
  resolvers: {
    [key in keyof CSSProperties]: keyof this['scales']
  }
}

type ThemeContextProps = StaticTheme | null
const ThemeContext = React.createContext<ThemeContextProps>(null)

interface ThemeProviderProps {
  theme: StaticTheme
}
export const ThemeProvider = ({
  children,
  theme,
}: React.PropsWithChildren<ThemeProviderProps>): ReactElement => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextProps => {
  return React.useContext(ThemeContext)
}
