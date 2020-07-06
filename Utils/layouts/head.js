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

  return (
    <Head>
      <title>
        {t("head.sub_title")} | {pageTitle}
      </title>
      <meta property="og:locale:alternate" content="en-GB" />
      <meta property="og:locale:alternate" content="cy-GB" />
      <meta property="og:description" content={t("head.description")} />
      <meta property="og:video" content="http://example.com/bond/trailer.swf" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      ></link>
    </Head>
  );
};

export default withTranslation("common")(AppHead);
