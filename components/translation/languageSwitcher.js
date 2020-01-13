import { i18n, Link, withTranslation } from './i18n'
const LanguageSwitcher =({t})=>{

    return(
        <span onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'cy' : 'en')}>
          {t("altLanguage")}
        </span>
    )
}

export default withTranslation('common')(LanguageSwitcher)
    