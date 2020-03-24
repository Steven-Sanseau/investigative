import React from 'react'
import { WebView } from 'react-native-webview'

export function WebWiewScreen({ route }) {
  const { href } = route.params
  return <WebView source={{ uri: href }} />
}
