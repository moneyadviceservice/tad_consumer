import {
  resolveMedia,
  Anchor,
  Col,
  Row,
} from "@moneypensionservice/directories";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
// import RightChevron from "../../public/assets/Images/MAS_right-103.svg";
import { withTranslation } from "../translation/i18n";

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
  ${resolveMedia.md`
    display: block;
    background: #edf0f0;
    border-bottom: none;
    padding-top: 15px;
    padding-bottom: 15px
`};
`;

const BreadAnchor = styled(Anchor)`
  font-size: 16px;
  &:link {
    text-decoration: none;
    background: none;
    border: none;
  }
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
`;

const Breadcrumb = ({ path, t }) => {
  const router = useRouter().pathname;
  const pathArray = process.browser ? router.split("/") : path.split("/");
  const crumbs = pathArray.map((paths, i) => {
    if (paths === "") {
      return false;
    }

    let anchorText = eval("`${paths}`");

    return (
      <Link key={i} href={paths}>
        <BreadAnchor href={paths}>{t(anchorText)}</BreadAnchor>
      </Link>
    );
  });
  return (
    <BreadcrumbSection align="stretch">
      <Section constrained>
        <Col style={{ display: "inline" }}>
          <BreadAnchor href="https://www.moneyadviceservice.org.uk/en">
            {t("home")}
          </BreadAnchor>

          <Link href="/">
            <BreadAnchor href="/">{t("travel")}</BreadAnchor>
          </Link>

          {crumbs}
        </Col>
      </Section>
    </BreadcrumbSection>
  );
};

export default withTranslation("header")(Breadcrumb);

export { Section, ExtendedSection };
