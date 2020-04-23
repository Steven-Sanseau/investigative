import React, { ReactElement } from 'react'
import { WebView as RNWebview } from 'react-native-webview'

interface WebWiewProps {
  src: string
}
export function Webview({ src }: WebWiewProps): ReactElement {
  return <RNWebview source={{ uri: src }} />
}
