import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from '../../node_modules/next/document';
import { ServerStyleSheet } from 'styled-components';
import { DocumentInitialProps,  } from '../../node_modules/next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>{
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  // Changing global font style
  render (): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet='utf-8' />

          <link href="https://fonts.googleapis.com/css2?family=Roboto:400,500,700" rel="stylesheet" />
        </Head>

        <body>
          <Main />

          <NextScript />


        </body>
      </Html>
    );
  }
}
