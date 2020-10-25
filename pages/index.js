import { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// utils
import { withTranslation } from "../Utils/translation/i18n";
import { Section, ExtendedSection, InternalLink } from "../Utils/layouts";
// components
import {
  Col,
  Heading,
  Anchor,
  Paragraph,
  resolveMedia,
} from "@moneypensionservice/directories";
import {
  ParagraphAnchor,
  UnorderedList,
  ListItem,
  QuestionButton,
  YoutubeFrame,
  AboutBox,
} from "../components/landingPage/Index";
import Title from "../components/title";
import BrokerTable from "../components/landingPage/BrokerTable";
import FAQ from "../components/landingPage/FAQ";
// PDF
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";
import MyDocument from "../components/landingPage/VideoTranscript";

const PDFLink = styled(PDFDownloadLink)`
  font-size: 16px;
  margin: 0;
  width: 100%;
  color: #003d8e;
  text-align: left;
  ${resolveMedia.md`
  text-align: right;
`};
`;

const Homepage = ({ t }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Fragment>
      {/* Main heading and firm registration anchor */}
      <Section constrained data-testid="contentRow">
        <Col sizes={{ xs: 12, md: 9 }} data-testid="contentCol">
          <Title />
        </Col>
        <Col sizes={{ xs: 12, md: 3 }} data-testid="contentCol">
          <ParagraphAnchor style={{ fontSize: "16px" }}>
            <Anchor
              href="https://radsignup.moneyadviceservice.org.uk/travel_insurance_registrations/new"
              style={{ fontSize: "16px" }}
            >
              {t("home.banner.register")}
            </Anchor>
            {t("home.banner.or")}
            <Anchor
              href="https://radsignup.moneyadviceservice.org.uk/users/sign_in"
              style={{ fontSize: "16px" }}
            >
              {t("home.banner.login")}
            </Anchor>
            {t("home.banner.as")}
          </ParagraphAnchor>
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
              <QuestionButton primary>
                {t("home.conditions.button")}
              </QuestionButton>
            </InternalLink>
          </Col>
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <AboutBox style={{ marginTop: "28px" }}>
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
            <YoutubeFrame src="https://www.youtube.com/embed/zz1bzoSQiMQ" />
            <Paragraph color="#515151" textSize="16px" margin={{ top: "20px" }}>
              {t("home.video.description")}&nbsp;
              {isClient && (
                <PDFLink
                  document={<MyDocument t={t} />}
                  fileName="Script for Travel Insurance Directory Video"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading" : t("home.video.transcript")
                  }
                </PDFLink>
              )}
            </Paragraph>
          </Col>
          <Col sizes={{ xs: 12, md: 6 }} data-testid="contentCol">
            <Heading level={2} color="#006A00">
              {t("home.faqs.heading")}
            </Heading>
            <FAQ
              locale={t("home.faqs.list", { returnObjects: true })}
              color="#003d8e"
              titleSize="16px"
              titleWeight="200"
            />
          </Col>
        </Section>
      </ExtendedSection>
      {/* Articles and find a broker */}
      <ExtendedSection align="stretch">
        <Section constrained data-testid="contentRow">
          <Col
            sizes={{ xs: 12, md: 6 }}
            margin={{ bottom: "2rem" }}
            data-testid="contentCol"
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
            <BrokerTable
              id="need_help"
              margin={{ bottom: "15px" }}
              sizes={{ xs: 12, md: 4 }}
              title={t("home.broker.heading")}
              content={t("home.broker.content", { returnObjects: true })}
            ></BrokerTable>
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
