import React from 'react'
import { enableScreens } from 'react-native-screens'
enableScreens()

import Navigation from 'src/navigations/Home'

import * as Font from 'expo-font'
import ErrorBoundary from 'react-error-boundary'
import { Platform, StatusBar } from 'react-native'
import { ThemeProvider, defaultTheme } from 'native-styled'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Text } from 'src/components/primitives/Text'
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
  }, [])

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
    <ErrorBoundary>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher,
        }}
      >
        <SafeAreaProvider>
          <ThemeProvider theme={defaultTheme}>
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
                <I18nInitializer>
                  <GrowlProvider>{appLoaded && <Navigation />}</GrowlProvider>
                </I18nInitializer>
              </ThemeProviderContext>
            </AppearanceProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </SWRConfig>
    </ErrorBoundary>
  )
}
