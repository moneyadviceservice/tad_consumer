import withReduxStore from "../redux/with-redux-store";
import { Provider, } from "react-redux";
import { appWithTranslation } from "../Utils/translation/i18n";
import Head from "../Utils/layouts/head";
import { ThemeProvider, Container } from "@moneypensionservice/directories";


const MyApp = ({
  Component,
  pageProps = {},
  reduxStore,
  path,
  alternateAddress,
}) => {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider>
        <Head path={path} data-testid="contentHead" />
        <Container
          as="main"
          style={{ paddingRight: "0", paddingLeft: "0" }}
          fluid
        >
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // get initial props from the server
  let pageProps = {};
  let alternateLang = "";

  if (!process.browser) {
    alternateLang = ctx.req.language === "en" ? "cy" : "en";
 
  }
  

  let protocol = !process.browser ? ctx.req.protocol : "";
  let host = !process.browser ? ctx.req.headers.host : "";
  let path = !process.browser ? ctx.pathname : "";
  let alternateAddress =
    `${protocol}://${host}/${alternateLang}${path}`;
  
  pageProps = await Component.getInitialProps(ctx);

  return {
    pageProps: pageProps,
    alternateAddress: alternateAddress,
    path: path,
    namespacesRequired: ["listings", "common", "footer"],
  };
};

export default withReduxStore(appWithTranslation(MyApp));
export { MyApp }
