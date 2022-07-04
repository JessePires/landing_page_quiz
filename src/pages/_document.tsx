import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from '../../node_modules/next/document';
import { ServerStyleSheet } from 'styled-components';
import { DocumentInitialProps  } from '../../node_modules/next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  // Changing global font style
  render (): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet='utf-8' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
