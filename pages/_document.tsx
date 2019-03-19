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
          <meta name="description" content="Free toolkit for develop web application" />
          <meta name="keywords" content="Next,NextJs,React,Express,Toolkit,Web Toolkit,React Toolkit,Tool Kit,Starter for Startup"></meta>
          <meta name="author" content="Oleksandr Rudin" />
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