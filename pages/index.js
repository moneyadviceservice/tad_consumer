import { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../components/translation/i18n";

import { Container, Row, Col } from "@moneypensionservice/directories";

const Homepage = ({ t }) => {
  return (
    <Fragment>
      <Container debug>
        <Row>
          <Col sizes={{ xs: 12, md: 7 }} debug>
            H1
          </Col>
          <Col sizes={{ xs: 12, md: 5 }} debug>
            Anchor
          </Col>
        </Row>
      </Container>
      <Container debug>
        <Row>
          <Col sizes={{ xs: 12, md: 7 }} debug>
            Required Question and link button
          </Col>
          <Col sizes={{ xs: 12, md: 5 }} debug>
            Quote disclaimer
          </Col>
        </Row>
      </Container>
      <Container debug>
        <Row>
          <Col sizes={{ xs: 12, md: 6 }} debug>
            Youtube Video
          </Col>
          <Col debug>FAQs</Col>
        </Row>
      </Container>
      <Container debug>
        <Row>
          <Col sizes={{ xs: 12, md: 6 }} debug>
            Articles &#x26; Guides
          </Col>
          <Col debug>Find a broker</Col>
        </Row>
      </Container>
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
