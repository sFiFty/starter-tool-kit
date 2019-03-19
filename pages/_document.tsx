import Document, { Head, Main, NextScript } from 'next/document'

import { Layout } from 'components/Layout';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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