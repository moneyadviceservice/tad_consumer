import { Col,   Paragraph,   resolveMedia, Heading } from "@moneypensionservice/directories";
import { i18n, withTranslation } from "../../Utils/translation/i18n";
import { useRouter } from "next/router";
import styled from "styled-components";
import Breadcrumb, { MobileBreadcrumb } from "../../Utils/layouts";
import MoneyHelperBanner from "../../Utils/layouts/banner";
import SubHeader  from "../../Utils/layouts/header";

const PageHeader = ({ t, alternateAddress, path }) => {
  let headerLang = !process.browser
    ? t("Header", { returnObjects: true })
    : t("Header", { returnObjects: true }).Header;

  

  const clientLng = i18n.language == "en" ? "cy" : "en";
  const pathname = useRouter().pathname;

  if (typeof window !== "undefined") {
    var pathName = window.location.pathname;
    if(pathname == "/en") {
      window.location.href = "https://www.moneyhelper.org.uk/en/everyday-money/insurance/travel-insurance-directory";
    } else {
      window.location.href = "https://www.moneyhelper.org.uk/cy/everyday-money/insurance/travel-insurance-directory";
    }
  }

  const clientAlt = `/${clientLng}${pathname}`
  const altAdd = !process.browser ? alternateAddress : clientAlt;
  
  

  return (
    <div>
        <MoneyHelperBanner clientLng={clientLng}/>
    
        <SubHeader alt={alternateAddress}/>
      <Breadcrumb path={path}></Breadcrumb>
      <MobileBreadcrumb t={t} path={path} />
      </div>
  );
};

PageHeader.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});

export default withTranslation("header")(PageHeader);
