import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { i18n } from "../Utils/translation/i18n";
import { GA_TRACKING_ID } from "../Utils/gtag";
import { Fragment } from "react";

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
      <Html dir="ltr">
        <Head>
          <Fragment></Fragment>

          <script
            dangerouslySetInnerHTML={{
              __html: `<script
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })($ = window,document,'script','dataLayer','GTM-WVFLH9');/>
          `,
            }}
          />
        </Head>
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
