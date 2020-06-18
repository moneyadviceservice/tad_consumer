import { Header } from "@moneypensionservice/directories";
import { i18n, withTranslation } from "../../Utils/translation/i18n";

const PageHeader = ({ t, alternateAddress }) => {
  const changeLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(i18n.language === "en" ? "cy" : "en");
  };
  let headerLang = !process.browser
    ? t("Header", { returnObjects: true })
    : t("Header", { returnObjects: true }).Header;

  return (
    <Header
      currentLng={i18n.language}
      setLng={(e) => changeLanguage(e)}
      lngUrl={alternateAddress}
      i18nLng={headerLang}
    />
  );
};

PageHeader.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});

export default withTranslation("header")(PageHeader);
