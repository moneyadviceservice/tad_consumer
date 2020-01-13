import React, { Fragment} from 'react'
import PropTypes from 'prop-types'

import { i18n, Link, withTranslation } from '../i18n'



const About = ({ t }) => (
  <Fragment>
      <h1>{t('h1')}</h1> 
      <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'cy' : 'en')}
        >
          Change 
        </button>

        <Link href="/about">
            <a>{t("about")}</a>
        </Link>
  </Fragment>
)

About.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

About.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(About)