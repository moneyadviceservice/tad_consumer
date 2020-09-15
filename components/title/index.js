import { Heading } from "@moneypensionservice/directories";
import ReactHtmlParser from "react-html-parser";
import PropTypes from "prop-types";
import styled from "styled-components";
import { resolveMedia } from "@moneypensionservice/directories";

import { withTranslation } from "../../Utils/translation/i18n";

const ExtHeading = styled(Heading)`
  width: 100%;
  color: #006a00;
  line-height: 1.1;
  margin-top: 20px;
  ${resolveMedia.md`
  width: 65%;
  
`};
`;
const Title = ({ t }) => {
  return (
    <ExtHeading level={1}>
      {ReactHtmlParser(t("home.banner.heading"))}
    </ExtHeading>
  );
};

Title.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
});

Title.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("landing", "common", "footer")(Title);
