import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { i18n } from "../Utils/translation/i18n";

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

  // render() {
  //   return (
  //     <Html dir="ltr" lang={this.props.__NEXT_DATA__.props.initialLanguage}>
  //       <Head />
  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   );
  // }
}
