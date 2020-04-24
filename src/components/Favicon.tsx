import Head from 'next/head'
import * as React from 'react'
import { useColorScheme } from 'react-native-appearance'

export default function Favicon(): React.ReactElement {
  const scheme = useColorScheme()
  const isDark = scheme === 'dark'
  const folderName = isDark ? '/favicon-dark' : ''
  const themeColor = isDark ? '#ffffff' : '#4630eb'
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/static/${folderName}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/static/${folderName}/favicon-16x16.png`}
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color={themeColor} />
    </Head>
  )
}
