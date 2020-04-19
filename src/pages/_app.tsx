import Head from 'next/head'
import React from 'react'
import Favicon from '../components/Favicon'
import { Text } from 'src/components/primitives/Text'
import { Styled } from 'src/utils/native-styled'
import { ThemeProvider as ThemeProviderContext } from 'src/contexts/theme'
import ErrorBoundary from 'react-error-boundary'
import { createTheme } from 'src/themes/theme'
import { useAsyncStorage } from 'src/utils/AsyncStorage'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Layout } from 'src/components/Layout'
import { TopBar } from 'src/components/TopBar'
import { loadFonts } from 'src/utils/Fonts'
import { I18nInitializer } from 'src/contexts/I18n'
import { GrowlProvider } from 'src/contexts/Growl'
import { GrowlMessage } from 'src/components/Growl'
import { SWRConfig } from 'swr'
import { fetcher } from 'src/utils/Fetcher'

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

  const [isSticky, setSticky] = React.useState<boolean>(false)
  const ref = React.useRef<any>(null)

  const handleScroll = (): void => {
    if (ref.current) {
      // const { width, height, px, py, fx, fy } = ref.current.measure
      ref.current.measure((width, height, px, py, fx, fy) => {
        setSticky(fy <= 0)
      })
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  React.useEffect(() => Styled().setTheme(theme), [])

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
        <SWRConfig
          value={{
            refreshInterval: 3000,
            fetcher: (query, ...args) => fetcher(query, ...args),
          }}
        >
          <ThemeProviderContext
            value={{
              name: themeName,
              setThemeName: setThemeName,
            }}
          >
            <I18nInitializer>
              <GrowlProvider>
                <TopBar />
                <Layout>
                  <GrowlMessage />
                  <Header
                    ref={ref}
                    sticky={isSticky}
                    initialSettingsData={pageProps?.initialSettingsData}
                  />
                  <Component {...pageProps} />
                </Layout>
                <Footer />
              </GrowlProvider>
            </I18nInitializer>
          </ThemeProviderContext>
        </SWRConfig>
      </ErrorBoundary>
    </>
  )
}
