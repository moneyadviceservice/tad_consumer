import React from "react"
import { HeaderSection, Section, BannerText, MoneyHelperLogo } from "."
import { i18n, withTranslation } from "../translation/i18n";
import {Anchor, Col, Heading, resolveMedia} from "@moneypensionservice/directories";
import { useRouter } from "next/router";
import MASLogoEN from "./MASLogoEN"
import MASLogoCY from "./MASLogoCY"

// import MasLogoEng from '../../assets/Images/mas_logo_en.svg'
// import MasLogoCy from '../../assets/Images/mas_logo_cy.svg'
// import MapsLogoEng from '../../assets/Images/maps_logo_en.svg'
// import MapsLogoCy from '../../assets/Images/maps_logo_cy.svg'



const Header = ({ t, alt, alternateAddress }) => {


    
    const clientLng = i18n.language == "en" ? "cy" : "en";
    const pathname = useRouter().pathname;
    const clientAlt = `/${clientLng}${pathname}`
    const altAdd = !process.browser ? alternateAddress : clientAlt;
    return (
        <HeaderSection align="stretch" style={{ background: "#428513" }} >
            <Section constrained >
                <Col style={{width: "200px !important"}}>
                {(i18n.language === "en")  && (<MASLogoEN /> )}
                {(i18n.language === "cy")  && (<MASLogoCY/> )}
                  
                </Col>
                <Col grow={false}>
              <Anchor
                color="white"
                textSize="0.875rem"
                weight="500"
                margin="0"
                href={alt}
                data-testid="localeAnchor"
              >
                {t("Header.localeButton")}
              </Anchor>
            </Col>
            </Section>

        </HeaderSection>
    )
}
export default withTranslation("header")(Header);