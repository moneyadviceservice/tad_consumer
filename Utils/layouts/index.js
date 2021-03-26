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
  border-bottom: 1px solid #9da1ca;
`;

const BreadcrumbSection = styled(ExtendedSection)`
  display: none;
  ${resolveMedia.md`
    display: block;
    background: #edf0f0;
    border-bottom: none;
    padding-top: 15px;
    padding-bottom: 15px
`};
`;

export const BreadAnchor = styled(Anchor)`
  text-decoration: none;
  border: none;
  font-size: 16px;

  &:after {
    font-size: 32px;
    line-height: 0;
    color: #96b4c0;
    position: relative;
    top: 4px;
    padding: 0 6px;
    content: " \\00203A  ";
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

export const MobileBreadAnchor = styled(BreadAnchor)`
  text-decoration: none;
  border: none;
  font-size: 14px;
  padding: 0;
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
  &:after {
    content: "";
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

export const MobileBreadLink = ({ href, name }) => (
  <Link href={href} passHref>
    <MobileBreadAnchor>{name}</MobileBreadAnchor>
  </Link>
);

const MobileBreadcrumb = ({ t }) => {
  const pathname = useRouter().pathname;

  if (pathname == "/listings") {
    return (
      <MobileExtended align="stretch">
        <Section constrained>
          <Col style={{ padding: 0 }}>
            <MobileBreadLink href="/" name={t("mobile")} />
          </Col>
        </Section>
      </MobileExtended>
    );
  }
  return "";
};

const Breadcrumb = ({ path, t }) => {
  const router = useRouter().pathname;
  const pathArray = process.browser ? router.split("/") : path.split("/");
  const crumbs = pathArray.map((paths, i) => {
    if (paths === "") {
      return false;
    }

    let anchorText = eval("`${paths}`");
    let hrefSlash = `/${paths}`;
    return <BreadLink key={i} href={hrefSlash} name={t(anchorText)} />;
  });

  return (
    <BreadcrumbSection align="stretch">
      <Section constrained>
        <Col style={{ display: "inline" }}>
          <BreadAnchor
            href="https://www.moneyadviceservice.org.uk/en"
            data-testid="breadAnchor"
          >
            {t("home")}
          </BreadAnchor>
          <BreadLink href="/" name={t("travel")} />
          {crumbs}
        </Col>
      </Section>
    </BreadcrumbSection>
  );
};

export default withTranslation("header")(Breadcrumb);

export { Section, ExtendedSection, InternalLink, MobileBreadcrumb };
