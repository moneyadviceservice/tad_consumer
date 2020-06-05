import { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../components/translation/i18n";

import {
  Row,
  Col,
  Heading,
  Anchor,
  Paragraph,
  Accordion,
} from "@moneypensionservice/directories";
import { LoginAnchor } from "../components/landingPage";

const Homepage = ({ t }) => {
  return (
    <Fragment>
      {/* Main heading and firm registration anchor */}
      <Row constrained margin="auto">
        <Col sizes={{ xs: 12, md: 8 }}>
          <Heading level={1} color="#006A00">
            {t("home.banner.heading")}
          </Heading>
        </Col>
        <Col sizes={{ xs: 12, md: 4 }} alignSelf="center">
          <LoginAnchor href="https://www.google.co.uk" target="_blank">
            {t("home.banner.register")}
          </LoginAnchor>
        </Col>
      </Row>

      <Row constrained margin="auto">
        <Col sizes={{ xs: 12, md: 7 }} debug>
          Required Question and link button
        </Col>
        <Col sizes={{ xs: 12, md: 5 }} debug>
          Quote disclaimer
        </Col>
      </Row>
      <Row constrained margin="auto">
        <Col sizes={{ xs: 12, md: 6 }} debug>
          Youtube Video
        </Col>
        <Col debug>FAQs</Col>
      </Row>
      <Row constrained margin="auto">
        <Col sizes={{ xs: 12, md: 6 }} debug>
          Articles &#x26; Guides
        </Col>
        <Col debug>Find a broker</Col>
      </Row>
    </Fragment>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["landing", "common", "footer"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("landing", "common", "footer")(Homepage);
