import React, { Fragment } from "react";
import App from "next/app";
import { appWithTranslation } from "../components/translation/i18n";

import withReduxStore from "../redux/with-redux-store";
import { Provider } from "react-redux";

import { ThemeProvider } from "@moneypensionservice/directories";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(appWithTranslation(MyApp));
