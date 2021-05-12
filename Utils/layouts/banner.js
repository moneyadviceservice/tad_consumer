import React from "react"
import { BannerSection, SubSection, BannerText } from "."
import { i18n, withTranslation } from "../translation/i18n";
import {Col, Heading, resolveMedia} from "@moneypensionservice/directories";
import styled from "styled-components";

import LogoEN from "./LogoEN.jsx"
import LogoCY from "./LogoCY.jsx"

export const MoneyHelperLogo = styled(Col)`
  display: flex;
  flex-direction: row;
  ${resolveMedia.md`
    justify-content: flex-end;
 
`};
  `;

  export const LargeLogo = styled(MoneyHelperLogo)`
  display: none;
  ${resolveMedia.md`
    display: flex;
   padding-top: 15px;
 
`};
  `
  export const InlineLogo = styled(MoneyHelperLogo)`
  display: block;
  margin-top: 10px;
  ${resolveMedia.md`
    display: none;
 
`};
  `;


const MoneyHelperBanner = ({ t }) => {
   
    return (
        <BannerSection align="stretch" style={{ background: "#0F19A0" }} >
            <SubSection constrained >
                <Col>
                    <Heading level={3} textSize="19px" lineHeight="0.5rem" color="#fff">{t("bannerHeading")}</Heading>
                    <BannerText>{t("banner")}</BannerText>
                </Col>
                <LargeLogo>
                    {(i18n.language === "en")  && (<LogoEN/> )}
                    {(i18n.language === "cy")  && (<LogoCY/> )}
                </LargeLogo>
                <InlineLogo>
                {(i18n.language === "en") && (<img style={{width: "180px"}} src="/assets/Images/mh-singleLine-en-white.svg"/>)}
                {(i18n.language === "cy") && (<img style={{width: "180px"}} src="/assets/Images/mh-singleLine-cy-white.svg"/>)}
                </InlineLogo>
            </SubSection>

        </BannerSection>
    )
}
export default withTranslation("header")(MoneyHelperBanner);