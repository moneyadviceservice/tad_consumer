import { Header } from "@moneypensionservice/directories";
import { i18n, withTranslation } from "../../Utils/translation/i18n";
import { useRouter } from "next/router";
import Breadcrumb, { MobileBreadcrumb } from "../../Utils/layouts";

const PageHeader = ({ t, alternateAddress, path }) => {
  let headerLang = !process.browser
    ? t("Header", { returnObjects: true })
    : t("Header", { returnObjects: true }).Header;

  const clientLng = i18n.language == "en" ? "cy" : "en";
  const pathname = useRouter().pathname;
  const clientAlt = `/${clientLng}${pathname}`
  const altAdd = !process.browser ? alternateAddress : clientAlt;


  return (
    <Header
      currentLng={i18n.language}
      lngUrl={altAdd}
      i18nLng={headerLang}
    >
      <Breadcrumb path={path}></Breadcrumb>
      <MobileBreadcrumb t={t} path={path} />
    </Header>
  );
};

PageHeader.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});

export default withTranslation("header")(PageHeader);
