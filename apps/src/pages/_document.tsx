import { getInitialProps } from '@expo/next-adapter/document'
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import React from 'react'

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
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@1,400;1,700&family=Source+Serif+Pro&display=swap"
            rel="stylesheet"
          />
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
