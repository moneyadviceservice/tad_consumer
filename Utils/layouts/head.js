import Head from "next/head";
import { useRouter } from "next/router";
import { withTranslation } from "../translation/i18n";

const AppHead = ({ path, t }) => {
  const route = useRouter().pathname;
  const pathname = process.browser ? route : path;

  let pageTitle;
  if (pathname === "/listings") {
    pageTitle = t("head.page.listings");
  } else {
    pageTitle = t("head.page.landing");
  }

  const script = process.browser ? (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WVFLH9');
    `,
      }}
    />
  ) : (
    ""
  );

  return (
    <Head>
      <title>
        {t("head.sub_title")} | {pageTitle}
      </title>
      <meta property="og:locale:alternate" content="en" />
      <meta property="og:locale:alternate" content="cy" />
      <meta property="og:description" content={t("head.description")} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      ></link>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
        crossOrigin="anonymous"
      ></script>

      {script}
    </Head>
  );
};

export default withTranslation("common")(AppHead);
