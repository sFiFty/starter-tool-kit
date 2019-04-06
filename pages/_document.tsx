const config = require('config');
import Document, { Head, Main, NextScript } from 'next/document'
import { setConfig } from 'next/config';
import { Script } from 'components/Script';
import { IConfigTypes } from 'types/core';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    setConfig({
      foo: 'bar',
    })
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps;
  }

  render() {
    return (
      <html>
        <Head>
          {
            config.type === IConfigTypes.production && (
              <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136559295-1"></script>
                <Script>
                  {
                    () => {
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'UA-136559295-1');
                    }
                  }
                </Script>
              </>
            )
          }
          <script async defer src="https://buttons.github.io/buttons.js"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Free toolkit for develop web application" />
          <meta name="keywords" content="Next,NextJs,React,Express,Toolkit,Web Toolkit,React Toolkit,Tool Kit,Starter for Startup"></meta>
          <meta name="author" content="Oleksandr Rudin" />
        </Head>
        <body className="app">
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}