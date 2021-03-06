import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import '../app/styles/index.scss';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {pageProps}
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Started Toolkit</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}