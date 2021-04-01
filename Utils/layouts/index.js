import {
    resolveMedia,
    Anchor,
    Col,
    Row,
  } from "@moneypensionservice/directories";
  import styled from "styled-components";
  import { useRouter } from "next/router";
  import { withTranslation, Link } from "../translation/i18n";
  
  const Section = styled(Row)`
    margin: auto;
    ${resolveMedia.md`
     padding: 0;
     padding-right: 15px;
     padding-left: 15px
  `};
  `;
  
  const ExtendedSection = styled(Row)`
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #cbdae0;
  `;
  
  const BreadcrumbSection = styled(ExtendedSection)`
    display: none;
    display: block;
    background: #edf0f0;
    border-bottom: none;
    padding-top: 15px;
    padding-bottom: 15px
  `;
  
  export const BreadAnchor = styled(Anchor)`
    text-decoration: none;
    border: none;
    font-size: 16px;
  
    &:before {
      font-size: 24px;
      line-height: 0;
      color: #96b4c0;
      position: relative;
      top: 4px;
      padding: 0;
      content: "\\2190  ";
      text-decoration: none;
    }
  
    &:hover,
    &:focus {
      outline: none;
      background-color: #e8b940;
      color: #003d8e;
      text-decoration: none;
    }
  
    &:link {
      text-decoration: none;
      background: none;
      border: none;
    }
  `;
  
  const MobileExtended = styled(ExtendedSection)`
    display: block;
    border-bottom: none;
    padding-top: 15px;
    padding-bottom: 0;
    ${resolveMedia.md`
      display: none;
  `};
  `;
  
  const InternalLink = ({ children, href }) => (
    <Link href={href} passHref>
      {children}
    </Link>
  );
  
  export const BreadLink = ({ href, name }) => (
    <Link href={href} passHref>
      <BreadAnchor>{name}</BreadAnchor>
    </Link>
  );
  
  const Breadcrumb = ({ t }) => {
    return (
      <BreadcrumbSection align="stretch">
        <Section constrained>
          <Col style={{ display: "inline" }}>
            <BreadAnchor href="/" data-testid="breadAnchor">
              {t("home")}
            </BreadAnchor >
          </Col>
        </Section>
      </BreadcrumbSection>
    );
  };
  
  export default withTranslation("header")(Breadcrumb);
  
  export { Section, ExtendedSection, InternalLink };