import {
    Paragraph,
    Col,
    Row,
    Pagination,
    Anchor,
    CompanyCard,
    resolveMedia,
  } from "@moneypensionservice/directories";
  import { withTranslation, i18n } from "../../../Utils/translation/i18n";
  
  import { useSelector } from "react-redux";
  import { useState, useEffect } from "react";
  import { PDFDownloadLink } from "@react-pdf/renderer";
  import MyDocument from "./Print";
  import Loading from "./loading";
  import styled from "styled-components";
  
  const PDFLink = styled(PDFDownloadLink)`
    font-size: 16px;
    margin: 0;
    width: 100%;
    color: #003d8e;
    text-align: left;
    ${resolveMedia.md`
    text-align: right;
  `};
  `;
  
  const WithoutJs = ({ t, offered }) => {
   
    return (
      <div>
        {/* results heading */}
        <div
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            fontSize: "16px",
            display: "flex",
            background: "#edf0f0",
            marginBottom: "20px",
            borderRadius: "5px",
            padding: "15px 15px",
          }}
        >
          <div
            style={{
              marginTop: 0,
              width: "100%",
              display: "flex",
              marginBottom: "10px",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              fontSize: "16px",
            }}
          >
            <span>
              {t("headings.showing")}
              1 {t("headings.of")} {offered.length}
            </span>
            <span>{t("headings.order")}</span>
          </div>
          
         
        </div>
         {offered.map((selectedFirm, i) => {
              return (
                <CompanyCard
                  key={i}
                  sizes={{ xs: 12, lg: 8 }}
                  data={selectedFirm}
                  currentLng={i18n.language}
                />
              );
            })}

            
      </div>
    );
  };
  
  export default withTranslation("listings")(WithoutJs);
  
  export { WithoutJs }
  