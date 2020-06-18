import { Header } from "@moneypensionservice/directories";
import { i18n, withTranslation } from "../../Utils/translation/i18n";

const PageHeader = ({ t, alternateAddress }) => {
  const changeLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(i18n.language === "en" ? "cy" : "en");
  };
  return (
    <Header
      currentLng={i18n.language}
      setLng={(e) => changeLanguage(e)}
      lngUrl={alternateAddress}
      localeText={t("altLanguage")}
    />
  );
};

PageHeader.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(PageHeader);
