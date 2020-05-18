import React from 'react'
import { enableScreens } from 'react-native-screens'
enableScreens()

import Navigation from 'src/navigations/Home'
import { ThemeProvider } from 'src/utils/native-styled'

import * as Font from 'expo-font'
// import ErrorBoundary from 'react-error-boundary'
import { Platform, StatusBar } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider as ThemeProviderContext } from 'src/contexts/theme'
import { createTheme } from 'src/themes/theme'
import { useAsyncStorage } from 'src/utils/AsyncStorage'
import { I18nInitializer } from 'src/contexts/I18n'
import { GrowlProvider } from 'src/contexts/Growl'
import { SWRConfig } from 'swr'
import { fetcher } from 'src/utils/Fetcher'

export default function Index(): JSX.Element {
  const colorScheme = useColorScheme()
  const [themeName, setThemeName] = useAsyncStorage('theme', 'dark')
  const [appLoaded, setAppLoaded] = React.useState(false)
  const theme = createTheme(themeName === 'native' ? colorScheme : themeName)

  React.useEffect(() => {
    async function loadApp(): Promise<void> {
      await Font.loadAsync({
        'Libre Franklin': require('./assets/fonts/Libre_Franklin/LibreFranklin-Bold.ttf'),
        'Source Serif Pro': require('./assets/fonts/Source_Serif_Pro/SourceSerifPro-Regular.ttf'),
      })
      setAppLoaded(true)
    }

    loadApp()
  }, [theme])

  function getStatusBarStyle(
    theme,
  ): 'default' | 'light-content' | 'dark-content' {
    if (theme === 'dark') {
      return 'light-content'
    } else if (theme === 'native') {
      return colorScheme === 'dark' ? 'light-content' : 'dark-content'
    } else {
      return 'dark-content'
    }
  }

  // const myErrorHandler = (
  //   error: Error,
  //   componentStack: string,
  // ): JSX.Element => {
  //   console.log(error, componentStack)
  //   return <Text>Error with APP</Text>
  // }

  return (
    // <ErrorBoundary>
    appLoaded && (
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher,
        }}
      >
        <SafeAreaProvider>
          <AppearanceProvider>
            {Platform.OS === 'ios' && (
              <StatusBar animated barStyle={getStatusBarStyle(themeName)} />
            )}
            <ThemeProviderContext
              value={{
                name: themeName,
                setThemeName: setThemeName,
              }}
            >
              <ThemeProvider theme={theme}>
                <I18nInitializer>
                  <GrowlProvider>{<Navigation />}</GrowlProvider>
                </I18nInitializer>
              </ThemeProvider>
            </ThemeProviderContext>
          </AppearanceProvider>
        </SafeAreaProvider>
      </SWRConfig>
    )
    // </ErrorBoundary>
  )
}
