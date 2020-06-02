import { Footer } from "@moneypensionservice/directories";
import { i18n, withTranslation } from "../translation/i18n";

const PageFooter = ({ t }) => {
  let footerLang = t("Footer", { returnObjects: true });
  return <Footer currentLgn={i18n.language} i18nLng={footerLang} />;
};
export default withTranslation("footer")(PageFooter);
