import { useRouting } from 'expo-next-react-navigation'
import React from 'react'
import { WebView } from 'react-native-webview'

export function WebWiewScreen() {
  const { getParam } = useRouting()
  const uri: string = getParam('href')
  return <WebView source={{ uri }} />
}
