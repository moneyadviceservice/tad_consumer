import React, { Fragment } from "react";
import App from "next/app";

import withReduxStore from "../redux/with-redux-store";
import { Provider } from "react-redux";

import { appWithTranslation } from "../Utils/translation/i18n";
import Header from "../components/header";
import Footer from "../components/footer/";
import Head from "../Utils/layouts/head";

import { ThemeProvider, Container } from "@moneypensionservice/directories";

class MyApp extends App {
  // get initial props from the server
  static async getInitialProps({ Component, ctx, reduxStore, req }) {
    let pageProps = {};
    let alternateLang = "";
    let language = "";
    if (!process.browser) {
      alternateLang = ctx.req.language === "en" ? "cy" : "en";
    }
    if (!process.browser) {
      language = ctx.req.language;
    }

    let protocol = !process.browser ? ctx.req.protocol : "";
    let host = !process.browser ? ctx.req.headers.host : "";
    let path = !process.browser ? ctx.pathname : "";
    let address = `${protocol}://${host}/${language}${path}` || "";
    let alternateAddress = !process.browser
      ? `${protocol}://${host}/${alternateLang}${path}`
      : "";

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (typeof window === "undefined") {
      return { pageProps, alternateAddress, path, address };
    }

    return { pageProps };
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore,
      alternateAddress,
      path,
      address,
    } = this.props;

    console.log(address);

    return (
      <Provider store={reduxStore}>
        <ThemeProvider>
          <Head
            address={address}
            alternateAddress={alternateAddress}
            path={path}
          />
          <Header path={path} alternateAddress={alternateAddress} />
          <Container
            as="main"
            style={{ paddingRight: "0", paddingLeft: "0" }}
            fluid
          >
            <Component {...pageProps} />
          </Container>
          <Footer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(appWithTranslation(MyApp));
