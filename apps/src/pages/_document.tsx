import { getInitialProps } from '@expo/next-adapter/document'
import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class CustomDocument extends Document {
  static getInitialProps = async (props) => {
    const result = await getInitialProps(props)
    return { ...result }
  }

  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
