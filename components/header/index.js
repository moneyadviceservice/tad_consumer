import { Header } from "@moneypensionservice/directories";
import { i18n, withTranslation } from "../../Utils/translation/i18n";
import { useEffect } from "react";

import Breadcrumb, { MobileBreadcrumb } from "../../Utils/layouts";

const PageHeader = ({ t, alternateAddress, path }) => {
  const changeLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(i18n.language === "en" ? "cy" : "en");
  };
  let headerLang = !process.browser
    ? t("Header", { returnObjects: true })
    : t("Header", { returnObjects: true }).Header;

  // let mobileBreadcrumb;

  // useEffect(() => {
  //   mobileBreadcrumb = path == "/listings" ? <MobileBreadcrumb t={t} /> : "";
  // }, []);

  return (
    <Header
      currentLng={i18n.language}
      setLng={(e) => changeLanguage(e)}
      lngUrl={alternateAddress}
      i18nLng={headerLang}
    >
      <Breadcrumb path={path}></Breadcrumb>
      <MobileBreadcrumb t={t} path={path} />
    </Header>
  );
};

PageHeader.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});

export default withTranslation("header")(PageHeader);
