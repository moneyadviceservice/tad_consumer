import { Footer } from "@moneypensionservice/directories";
import { i18n, withTranslation } from "../translation/i18n";

const PageFooter = (props) => {
  return <Footer currentLgn={i18n.language} />;
};
export default withTranslation("common")(PageFooter);
