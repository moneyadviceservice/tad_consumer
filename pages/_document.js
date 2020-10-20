import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const currentLang = ctx.req.i18n;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        current: ctx.req.i18n,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html dir="ltr" lang={this.props.__NEXT_DATA__.props.initialLanguage}>
        <Head />

        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WVFLH9"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
