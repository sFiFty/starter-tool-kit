import Document, { Head, Main, NextScript } from 'next/document'

import { Layout } from '../app/components/Layout'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className="custom_class">
          <Layout>
            <Main />
            <NextScript />
          </Layout>
        </body>
      </html>
    )
  }
}