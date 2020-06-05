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
import {
  LoginAnchor,
  UnorderedList,
  ListItem,
  QuestionButton,
} from "../components/landingPage";

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

      {/* Questions and quote disclaimer */}
      <Row
        background="#edf0f0"
        align="stretch"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <Row constrained margin="auto">
          <Col sizes={{ xs: 12, md: 7 }}>
            <Heading level={3}> {t("home.conditions.heading")}</Heading>
            <UnorderedList>
              {t("home.conditions.questions", { returnObjects: true }).map(
                ({ answer }, i) => (
                  <ListItem key={i}>{answer}</ListItem>
                )
              )}
            </UnorderedList>
            <QuestionButton primary href="/listings">
              {t("home.conditions.button")}
            </QuestionButton>
          </Col>
          <Col sizes={{ xs: 12, md: 5 }}>
            <Col
              style={{
                margin: "22px 11px",
                border: "4px solid #00BEBE",
                padding: "20px 30px",
                fontSize: "18px",
                background: "#fff",
                fontWeight: 400,
              }}
            >
              {t("home.conditions.disclaimer")}
            </Col>
          </Col>
        </Row>
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
