import React from "react"
import { HeaderSection, SubSection, BannerText, MoneyHelperLogo } from "."
import { withTranslation } from "../translation/i18n";
import {Col, Heading} from "@moneypensionservice/directories";


const Header = ({ t }) => {
    return (
        <HeaderSection align="stretch" style={{ background: "#0F19A0" }} >
            <SubSection constrained >
                <Col>
                    <Heading level={3} textSize="19px" lineHeight="0.5rem" color="#fff">{t("bannerHeading")}</Heading>
                    <BannerText>{t("banner")}</BannerText>
                </Col>
                <MoneyHelperLogo>
                    logo
           </MoneyHelperLogo>
            </SubSection>

        </HeaderSection>
    )
}
export default withTranslation("header")(Header);