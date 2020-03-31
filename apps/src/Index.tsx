import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { Platform, StatusBar } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { ThemeProvider } from 'styled-components/native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import ErrorBoundary from 'react-error-boundary'

import { ThemeProvider as ThemeProviderContext } from 'src/contexts/theme'
import { createTheme } from 'src/themes/theme'
import { Text } from 'src/components/Text'

export function Index({ children }: { children: any }): JSX.Element {
  const colorScheme = useColorScheme()
  const [themeName, setThemeName] = useState('dark')
  const [appLoaded, setAppLoaded] = useState(false)
  const theme = createTheme(themeName === 'native' ? colorScheme : themeName)

  useEffect(() => {
    async function loadApp(): Promise<void> {
      await Font.loadAsync({
        LibreFranklin: require('../assets/fonts/Libre_Franklin/LibreFranklin-Bold.ttf'),
        SourceSerifPro: require('../assets/fonts/Source_Serif_Pro/SourceSerifPro-Regular.ttf'),
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

  const myErrorHandler = (
    error: Error,
    componentStack: string,
  ): JSX.Element => {
    console.log(error, componentStack)
    return <Text>Error with APP</Text>
  }

  return (
    <ErrorBoundary onError={myErrorHandler}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <AppearanceProvider>
            {Platform.OS === 'ios' && (
              <StatusBar animated barStyle={getStatusBarStyle(themeName)} />
            )}
            <ThemeProviderContext
              value={{
                values: theme,
                name: themeName,
                setThemeName: setThemeName,
              }}
            >
              {appLoaded && children}
            </ThemeProviderContext>
          </AppearanceProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  )
}
