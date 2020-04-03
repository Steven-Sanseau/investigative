import Head from 'next/head'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Index } from 'src/Index'
import Favicon from '../components/Favicon'

EStyleSheet.build({}) // always call EStyleSheet.build() even if you don't use global variables!

export default function App({ Component, router = {}, pageProps }: any) {
  const themeColor = '#4630eb'

  const injectMeta = [
    {
      key: 'viewport',
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1.00001,viewport-fit=cover',
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

  return (
    <>
      <Head>
        <title>{siteTitle}</title>

        {injectMeta.map((value, index) => {
          return <meta key={`meta-${index}`} {...value} />
        })}
      </Head>
      <Index>
        <>
          <Favicon />
          <Component {...pageProps} />
        </>
      </Index>
    </>
  )
}
