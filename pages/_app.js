import React, { Fragment } from 'react'
import App from 'next/app'
import { appWithTranslation } from '../components/translation/i18n'

import {Header, Logo} from '../components/Styles/Header'
import GlobalStyle from '../components/Styles/globalStyle'
import { Translation } from '../components/Styles/Text'
import LanguageSwitcher from '../components/translation/languageSwitcher'
import Footer from '../components/footer'
import { withRedux } from '../redux/withRedux'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
        <Fragment>
         <GlobalStyle />
        <Header pb="0" pt="0" justify="space-between">
          {/* Wrap a container around */}
          <Logo />
          <Translation><LanguageSwitcher /></Translation>
        </Header>
      <Component {...pageProps} />
      <Footer/>
      </Fragment>
    )
  }
}

export default withRedux(appWithTranslation(MyApp))