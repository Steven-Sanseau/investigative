import Head from 'next/head'
import React from 'react'
import Favicon from '../components/Favicon'
import { Text } from 'src/components/Text'
import { ThemeProvider } from 'src/utils/Styled'
import { ThemeProvider as ThemeProviderContext } from 'src/contexts/theme'
import ErrorBoundary from 'react-error-boundary'
import { createTheme } from 'src/themes/theme'
import { useAsyncStorage } from 'src/utils/AsyncStorage'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Layout } from 'src/components/Layout'
import { TopBar } from 'src/components/TopBar'
import { loadFonts } from 'src/utils/Fonts'

export default ({ Component, pageProps }: any): JSX.Element => {
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

  const myErrorHandler = (error: Error): JSX.Element => (
    <Text>Error with APP: {error.message}</Text>
  )

  const [themeName, setThemeName] = useAsyncStorage('theme', 'dark')
  const theme = createTheme(themeName)
  React.useEffect(() => loadFonts(), [])

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
            <TopBar />
            <Layout>
              <Header initialSettingsData={pageProps?.initialSettingsData} />
              <Component {...pageProps} />
            </Layout>
            <Footer />
          </ThemeProviderContext>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  )
}
