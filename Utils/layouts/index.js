import {
    resolveMedia,
    Anchor,
    Col,
    Row,
  } from "@moneypensionservice/directories";
  import styled from "styled-components";
  import { useRouter } from "next/router";
  import { withTranslation, Link } from "../translation/i18n";
  import titleBackground from "../../public/assets/Images/title_bg_img.png"
  
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
 
    ${({ bgImg }) => bgImg && `
    background-image: url(${titleBackground});
  `}
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
    color: #c82a87;
    &:before {
      font-size: 24px;
      line-height: 0;
      color: #c82a87;
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
      <BreadAnchor style={{color:"#c82a87", fontWeight: "500"}}>{name}</BreadAnchor>
    </Link>
  );
  
  
  const Breadcrumb = ({ t }) => {

    return (
      <BreadcrumbSection align="stretch">
        <Section constrained>
          <Col style={{ display: "inline" }}>
            <BreadLink name={t("home")} href="/" data-testid="breadAnchor"/>
          </Col>
        </Section>
      </BreadcrumbSection>
    );
  };
  
  export default withTranslation("common")(Breadcrumb);
  
  export { Section, ExtendedSection, InternalLink };