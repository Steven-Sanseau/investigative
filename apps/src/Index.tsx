import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import { Platform, StatusBar } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import styled, { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ThemeProvider as ThemeProviderContext } from 'src/contexts/theme'
import { createTheme } from 'src/themes/theme'

export function Index({ children }) {
  const colorScheme = useColorScheme()
  const [themeName, setThemeName] = useState('dark')
  const [appLoaded, setAppLoaded] = useState(false)
  const theme = createTheme(themeName === 'native' ? colorScheme : themeName)

  useEffect(() => {
    async function loadApp() {
      await Font.loadAsync({
        LibreFranklin: require('../assets/fonts/Libre_Franklin/LibreFranklin-Bold.ttf'),
        SourceSerifPro: require('../assets/fonts/Source_Serif_Pro/SourceSerifPro-Regular.ttf'),
      })

      setAppLoaded(true)
    }

    loadApp()
  }, [])

  function getStatusBarStyle(theme) {
    if (theme === 'dark') {
      return 'light-content'
    } else if (theme === 'native') {
      return colorScheme === 'dark' ? 'light-content' : 'dark-content'
    } else {
      return 'dark-content'
    }
  }

  const App = styled.View`
    flex: 1;
  `
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AppearanceProvider>
          {Platform.OS === 'ios' && (
            <StatusBar animated barStyle={getStatusBarStyle(themeName)} />
          )}
          <App>
            <ThemeProviderContext
              value={{
                values: theme,
                name: themeName,
                setThemeName: setThemeName,
              }}
            >
              {appLoaded && children}
            </ThemeProviderContext>
          </App>
        </AppearanceProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
