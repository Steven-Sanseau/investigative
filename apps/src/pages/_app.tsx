import Head from 'next/head'
import React from 'react'
import Favicon from '../components/Favicon'
import { Text } from 'src/components/Text'
import { ThemeProvider } from 'src/utils/Styled'
import { ThemeProvider as ThemeProviderContext } from 'src/contexts/theme'
import ErrorBoundary from 'react-error-boundary'
import { createTheme } from 'src/themes/theme'
import { useAsyncStorage } from 'src/utils/AsyncStorage'

export default function App({ Component, router = {}, pageProps }: any) {
  const themeColor = '#4630eb'

  const injectMeta = [
    {
      key: 'viewport',
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1.0,viewport-fit=cover',
    },
    {
      name: 'msapplication-TileColor',
      content: themeColor,
    },
    {
      name: 'theme-color',
      content: themeColor,
    },
  ]

  const siteTitle = `Investigative`

  const myErrorHandler = (
    error: Error,
    componentStack: string,
  ): JSX.Element => {
    return <Text>Error with APP</Text>
  }

  const [themeName, setThemeName] = useAsyncStorage('theme', 'dark')
  const theme = createTheme(themeName)

  return (
    <>
      <Head>
        <title>{siteTitle}</title>

        {injectMeta.map((value, index) => {
          return <meta key={`meta-${index}`} {...value} />
        })}
      </Head>
      <Favicon />
      <ErrorBoundary onError={myErrorHandler}>
        <ThemeProvider theme={theme}>
          <ThemeProviderContext
            value={{
              name: themeName,
              setThemeName: setThemeName,
            }}
          >
            <Component {...pageProps} />
          </ThemeProviderContext>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}
