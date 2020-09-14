import { Heading } from "@moneypensionservice/directories";
import ReactHtmlParser from "react-html-parser";
import PropTypes from "prop-types";

import { withTranslation } from "../../Utils/translation/i18n";
const Title = ({ t }) => {
  return (
    <Heading
      level={1}
      color="#006A00"
      lineHeight="1.1"
      style={{ marginTop: "20px" }}
    >
      {ReactHtmlParser(t("home.banner.heading"))}
    </Heading>
  );
};

Title.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
});

Title.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("landing", "common", "footer")(Title);
