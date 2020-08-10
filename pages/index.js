import { Fragment, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

import { withTranslation } from "../Utils/translation/i18n";

import {
  Col,
  Heading,
  Anchor,
  Accordion,
  InfoTable,
  Paragraph,
} from "@moneypensionservice/directories";
import {
  ParagraphAnchor,
  UnorderedList,
  ListItem,
  QuestionButton,
  YoutubeFrame,
  AboutBox,
} from "../components/landingPage";
import { Section, ExtendedSection, InternalLink } from "../Utils/layouts";

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
          <ParagraphAnchor style={{ fontSize: "16px" }}>
            <Anchor
              href="https://radsignup.moneyadviceservice.org.uk/travel_insurance_registrations/new"
              style={{ fontSize: "16px" }}
            >
              {t("home.banner.register")}
            </Anchor>
            &nbsp;{t("home.banner.or")}
            <Anchor
              href="https://radsignup.moneyadviceservice.org.uk/users/sign_in"
              style={{ fontSize: "16px" }}
            >
              &nbsp; {t("home.banner.login")}
            </Anchor>
            &nbsp;{t("home.banner.as")}
          </ParagraphAnchor>
        </Col>
        <Col sizes={{ xs: 12 }} data-testid="contentCol">
          <Heading
            level={1}
            color="#006A00"
            lineHeight="1.1"
            style={{ marginTop: "20px" }}
          >
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

            <InternalLink href="/listings">
              <QuestionButton href="/listings" primary>
                {t("home.conditions.button")}
              </QuestionButton>
            </InternalLink>
          </Col>
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <AboutBox style={{ marginTop: "50px" }}>
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
            <Paragraph color="#515151" textSize="16px" margin={{ top: "20px" }}>
              Watch this short video to find out if this directory can help you
              find the cover you need.
              <Anchor textSize="16px">Download the transcript</Anchor>.
            </Paragraph>
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
                titleSize="16px"
                titleWeight="200"
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
          <Col
            sizes={{ xs: 12, md: 6 }}
            data-testid="contentCol"
            style={{ marginBottom: "50px" }}
          >
            <Heading level={2} color="#006A00">
              {t("home.articles.heading")}
            </Heading>
            {t("home.articles.links", { returnObjects: true }).map(
              ({ text, href }, i) => (
                <Anchor textSize="16px" key={i} href={href}>
                  {text}
                </Anchor>
              )
            )}
          </Col>
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <InfoTable
              margin={{ bottom: "15px" }}
              styles={{ paddingLeft: "30px" }}
              sizes={{ xs: 12, md: 4 }}
              title={t("home.broker.heading")}
            >
              {ReactHtmlParser(t("home.broker.content"))}
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
