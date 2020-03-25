import React from 'react'
import { WebView } from 'react-native-webview'
import { useRouting } from 'expo-next-react-navigation'

export function WebWiewScreen() {
  const { getParam } = useRouting()
  const uri = getParam('href')
  return <WebView source={{ uri }} />
}
