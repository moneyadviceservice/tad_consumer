import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

import { withTranslation } from "../Utils/translation/i18n";

import {
  Row,
  Col,
  Heading,
  Anchor,
  Paragraph,
  Accordion,
  Button,
} from "@moneypensionservice/directories";
import {
  ParagraphAnchor,
  UnorderedList,
  ListItem,
  QuestionButton,
  YoutubeFrame,
  InfoTable,
  InfoTableHead,
  InfoTH,
  InfoTD,
  AboutBox,
  BrokerOpening,
} from "../components/landingPage";
import { Section, ExtendedSection } from "../Utils/layouts";

const Homepage = ({ t }) => {
  const [activeIndex, changeIndex] = useState();

  const handleClick = (current) => {
    const newIndex = activeIndex === current ? -1 : current;
    changeIndex(newIndex);
  };
  return (
    <Fragment>
      {/* Main heading and firm registration anchor */}
      <Section constrained data-testid="contentRow">
        <Col sizes={{ xs: 12 }} alignSelf="center" data-testid="contentCol">
          <ParagraphAnchor>
            <Anchor href="https://www.moneyadvisoryservice.co.uk/register">
              {t("home.banner.register")}
            </Anchor>
            &nbsp;{t("home.banner.or")}
            <Anchor href="https://www.moneyadvisoryservice.co.uk/login">
              &nbsp; {t("home.banner.login")}
            </Anchor>
            &nbsp;{t("home.banner.as")}
            {/* <LoginAnchor href="https://www.google.co.uk" target="_blank">
              {t("home.banner.register")}
            </LoginAnchor> */}
          </ParagraphAnchor>
        </Col>
        <Col sizes={{ xs: 12 }} data-testid="contentCol">
          <Heading level={1} color="#006A00" style={{ marginTop: "20px" }}>
            {t("home.banner.heading")}
          </Heading>
        </Col>
      </Section>

      {/* Questions and quote disclaimer */}
      <ExtendedSection align="stretch" background="#edf0f0">
        <Section constrained data-testid="contentRow">
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <Heading level={2} color="#006A00">
              {t("home.conditions.heading")}
            </Heading>
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
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <AboutBox>
              <Heading level={3} color="#006A00" style={{ marginTop: 0 }}>
                {t("home.about.heading")}
              </Heading>
              {t("home.about.content")}
            </AboutBox>
          </Col>
        </Section>
      </ExtendedSection>

      {/* Youtube Video and FAQs */}
      <ExtendedSection align="stretch">
        <Section constrained data-testid="contentRow">
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <Heading level={2} color="#006A00">
              {t("home.video.heading")}
            </Heading>
            <YoutubeFrame src="https://www.youtube.com/embed/aijzHfO0VC8" />
          </Col>
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <Heading level={2} color="#006A00">
              {t("home.faqs.heading")}
            </Heading>
            {t("home.faqs.list", {
              returnObjects: true,
            }).map(({ question, answer }, i) => (
              <Accordion
                color="#003d8e"
                style={{
                  fontSize: "16px",
                  fontWeight: "200",
                  color: "#515151",
                  lineHeight: "23px",
                }}
                key={i}
                title={question}
                active={activeIndex === i}
                onClick={() => handleClick(i)}
              >
                {ReactHtmlParser(answer)}
              </Accordion>
            ))}
          </Col>
        </Section>
      </ExtendedSection>

      {/* Articles and find a broker */}
      <ExtendedSection align="stretch">
        <Section constrained data-testid="contentRow">
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <Heading level={2} color="#006A00">
              {t("home.articles.heading")}
            </Heading>
            {t("home.articles.links", { returnObjects: true }).map(
              ({ text, href }, i) => (
                <Anchor key={i} href={href}>
                  {text}
                </Anchor>
              )
            )}
          </Col>
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <InfoTable>
              <InfoTableHead>
                <tr>
                  <InfoTH>
                    <img src="/assets/Images/question2.svg" />
                    &nbsp;{t("home.broker.heading")}
                  </InfoTH>
                </tr>
              </InfoTableHead>
              <tbody>
                <tr>
                  <InfoTD>
                    <Paragraph weight="400">{t("home.broker.intro")}</Paragraph>
                    <Paragraph weight={600}>
                      {t("home.broker.contact_details")}:
                    </Paragraph>
                    <Paragraph textSize="30px" weight={600}>
                      <img src="/assets/Images/call.svg" /> 0808 281 3298
                    </Paragraph>
                    <BrokerOpening>
                      &#40;Mon - Fri 9:00 am to 5:30 pm&#41;
                    </BrokerOpening>
                    <Anchor>
                      <img src="/assets/Images/www.svg" />
                      &nbsp;{t("home.broker.website")}
                    </Anchor>
                  </InfoTD>
                </tr>
              </tbody>
            </InfoTable>
          </Col>
        </Section>
      </ExtendedSection>
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
