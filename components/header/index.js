import { Header } from "@moneypensionservice/directories";
import { i18n, withTranslation } from "../translation/i18n";

const PageHeader = ({ t, alternateAddress }) => {
  const changeLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(i18n.language === "en" ? "cy" : "en");
  };
  return (
    <Header
      currentLgn={i18n.language}
      setLng={(e) => changeLanguage(e)}
      lngUrl={alternateAddress}
      localeText={t("altLanguage")}
    />
  );
};

export default withTranslation("common")(PageHeader);