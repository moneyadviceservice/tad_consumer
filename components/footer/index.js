import { Footer } from "@moneypensionservice/directories";
import { i18n, withTranslation } from "../../Utils/translation/i18n";

const PageFooter = ({ t }) => {
  let footerLang = t("Footer", { returnObjects: true });
  return <Footer currentLgn={i18n.language} i18nLng={footerLang} />;
};
PageFooter.getInitialProps = async () => ({
  namespacesRequired: ["footer"],
});

export default withTranslation("footer")(PageFooter);
