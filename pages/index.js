import { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../components/translation/i18n";

import { Container, Row, Col } from "@moneypensionservice/directories";

const Homepage = ({ t }) => {
  return (
    <Fragment>
      <Row constrained margin="auto">
        <Col sizes={{ xs: 12, md: 7 }} debug>
          H1
        </Col>
        <Col sizes={{ xs: 12, md: 5 }} debug>
          Anchor
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
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
