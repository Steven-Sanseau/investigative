import React from 'react'
import rosetta, { Rosetta } from 'rosetta'
// import * as Localization from 'expo-localization'
import * as locales from '../../i18n'
import { Text } from 'src/components/primitives/Text'

interface I18nProps {
  i18n: Rosetta<object>
  setLocale?: (locale: string) => {}
}
const I18nContext = React.createContext<I18nProps>(undefined)

export const configureI18n = (locale: string): I18nProps => {
  const importedLocales = Object.entries(locales).reduce(
    (all, [name, locale]) => ({
      ...all,
      [name]: locale,
    }),
    [],
  )
  const i18n = rosetta({
    ...importedLocales,
  })
  i18n.locale(locale)

  return { i18n }
}

export const I18nProvider = ({
  i18n,
  setLocale,
  children,
}: {
  i18n: Rosetta<object>
  setLocale: any
  children: any
}): any => {
  const value = React.useMemo(() => ({ i18n, setLocale }), [i18n, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
interface I18nInitializerProps {
  defaultLocale?: string
}
export const I18nInitializer = ({
  children,
  defaultLocale = 'fr',
}: React.PropsWithChildren<I18nInitializerProps>): any => {
  const [locale, setLocale] = React.useState(defaultLocale)

  return (
    <I18nProvider {...configureI18n(locale)} setLocale={setLocale}>
      {children}
    </I18nProvider>
  )
}

export const useI18n = (): I18nProps => {
  return React.useContext(I18nContext)
}

export const useT = (): ((key: string, params?: object) => string) => {
  const { i18n } = useI18n()
  return i18n.t.bind(i18n)
}

export const T = React.memo(function T({
  id,
  values,
  count,
  ...props
}: {
  id: string
  values?: object
  count?: number
}) {
  const t = useT()
  return <Text {...props}>{t(id, { ...values, count })}</Text>
})
