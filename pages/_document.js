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
          <script type="text/javascript" id="_informizely_script_tag"
            dangerouslySetInnerHTML={{
              __html: `
              var IzWidget = IzWidget || {};
              (function (d) {
                var scriptElement = d.createElement('script');
                scriptElement.type = 'text/javascript'; scriptElement.async = true;
                scriptElement.src = "https://insitez.blob.core.windows.net/site/8a33e5b3-23da-46d4-9c32-8b9c38aeaeda.js";
                var node = d.getElementById('_informizely_script_tag');
                node.parentNode.insertBefore(scriptElement, node);
              })(document);
          `,
            }}
          />

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
