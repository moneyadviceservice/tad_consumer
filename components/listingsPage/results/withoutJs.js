import {
   
    Anchor,
    CompanyCard,
    resolveMedia,
  } from "@moneypensionservice/directories";
  import { withTranslation, i18n } from "../../../Utils/translation/i18n";
  import styled from "styled-components";
 
  
  const PDFLink = styled(Anchor)`
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
            backgroundColor: "#F3F1F3",
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
              backgroundColor: "#F3F1F3",
              justifyContent: "space-between",
              fontSize: "16px",
            }}
          >
            <span>
              {t("headings.showing")}
              1 - {offered.length}
            </span>
            <span>{t("headings.order")}</span>
          </div>
          <PDFLink target="_parent" href="/listings?listingsPDF=true">{t("download.link")}</PDFLink>
         
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
  