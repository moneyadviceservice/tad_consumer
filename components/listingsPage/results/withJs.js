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
  import { BlobProvider } from "@react-pdf/renderer";
  import MyDocument from "./Print";
  import Loading from "./loading";
  import styled from "styled-components";
  import { AEMCompanyCard, AEMPagination } from "../utils";

    const AnchorLink = styled(Anchor)`
      font-size: 16px;
      margin: 0;
      width: 100%;
      color:  #037F8C;
      text-align: left;
      ${resolveMedia.md`
      text-align: right;
    `};
      &:focus:not(:focus-visible) {
        outline: none;
      }
      &:focus {
        background-color: unset;
        color: #037F8C;
      }
      &:active {
        color: #037F8C;
      }
      &:hover {
        color: #037F8C;
      }

    `;
  
  const Results = ({ t }) => {
    const offered = useSelector((state) => state.listings.offered);
    const firms = useSelector((state) => state.listings.firms);
  
    const [currentPage, setCurrentPage] = useState(1);
    const [firmsPerPage, setFirmsPerPage] = useState(5);
    const [isFilter, setFiltering] = useState(false);
  
    const indexOfLastFirm = currentPage * firmsPerPage;
    const indexOfFirstFirm = indexOfLastFirm - firmsPerPage;
    let lastIndex;
    let firstIndex;
  
    if (offered && offered.length <= indexOfLastFirm) {
      lastIndex = offered.length;
    } else {
      lastIndex = indexOfLastFirm;
    }
  
    if (offered && offered.length === 0) {
      firstIndex = offered.length;
    } else {
      firstIndex = indexOfFirstFirm + 1;
    }
  
    const currentFirms =
      offered && offered.slice(indexOfFirstFirm, indexOfLastFirm);
  
    const totalPages = Math.ceil(offered && offered.length / firmsPerPage);
  
    useEffect(() => {
      // reset to page 1 on filter
      setCurrentPage(1);
      // fake loading state on filter
      setFiltering(true);
      // resolve fake loading state after 300ms
      setTimeout(function() {
        setFiltering(false);
      }, 300);
    }, [offered]);
  
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const fileName = "travel_insurance_listings.pdf";
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
            backgroundColor: "#F3F1F3",
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
              backgroundColor: "#F3F1F3",
              flexWrap: "wrap",
              justifyContent: "space-between",
              fontSize: "16px",
            }}
          >
            <span>
              {t("headings.showing")}
              {firstIndex} - {lastIndex}
              {t("headings.of")} {offered && offered.length} {t("headings.firms")}
            </span>
            <span>{t("headings.order")}</span>
          </div>
          {isClient && (
            <BlobProvider
            document={<MyDocument firms={firms} t={t} />}
          >
            {({ blob, url, loading, error }) => {
              const text = loading ? t("download.loading") : t("download.link");
              return (
              <AnchorLink 
                target="_parent" 
                download={fileName} 
                href={url}
              >
                  {text}
              </AnchorLink>
              );
          }}
            </BlobProvider>
         )}
        </div>
  
        {/* No firms returned from filtering */}
        {isFilter ? (
          <Loading data-testid="loadingDummy"/>
        ) : offered ? (
          offered.length == 0 ? (
            <Paragraph
              margin={{
                top: "40px",
                bottom: "40px",
              }}
            >
              {t("headings.noResult")}
            </Paragraph>
          ) : (
            currentFirms.map((selectedFirm, i) => {
              return (
                <AEMCompanyCard
                  key={i}
                  sizes={{ xs: 12, lg: 8 }}
                  data={selectedFirm}
                  currentLng={i18n.language}
                />
              );
            })
          )
        ) : (
          <Loading  data-testid="loadingDummy"/>
        )}



        
        {/* Pagination */}
        {offered && offered.length > 0 && totalPages > 1 ? (
          <AEMPagination
            currentLng={i18n.language}
            currentPage={currentPage}
            totalPages={totalPages}
            nextClick={() => {
              setCurrentPage(currentPage + 1);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            prevClick={() => {
              setCurrentPage(currentPage - 1);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  };
  
  export default withTranslation("listings")(Results);
  
  export { Results }
  