import { getInitialProps } from '@expo/next-adapter/document'
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import React from 'react'
import { API_URL } from 'src/config/config'

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const result = await getInitialProps(ctx)
    return {
      ...result,
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="preconnect" href={API_URL}></link>
          <link rel="preconnect" href="https://fonts.googleapis.com/"></link>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
