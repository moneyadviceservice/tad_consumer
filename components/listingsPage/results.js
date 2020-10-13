import {
  Paragraph,
  Pagination,
  CompanyCard,
} from "@moneypensionservice/directories";

import { i18n } from "../../Utils/translation/i18n";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { EnglishListings, WelshListings } from "../pdf";
import Loading from "./loading";
import { EListings, WListings } from "./dummy";

const Results = ({ t }) => {
  const offered = useSelector((state) => state.listings.offered);
  // const firms = useSelector((state) => state.listings.firms);

  const [enTranscript, showEn] = useState(true);
  const [cyTranscript, showCy] = useState(false);

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
  // Toggle download link file
  useEffect(() => {
    showEn(i18n.language == "en" ? false : true);
    showCy(i18n.language == "cy" ? false : true);
  }, [i18n.language]);
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
            {firstIndex} - {lastIndex}
            {t("headings.of")} {offered && offered.length} {t("headings.firms")}
          </span>
          <span>{t("headings.order")}</span>
        </div>
        {/* Firm Download */}
        <EListings enTranscript={enTranscript}>
          {isClient && (
            <PDFDownloadLink
              document={<EnglishListings />}
              fileName="Script for Travel Insurance Directory Video"
              style={{ color: "#003d8e" }}
            >
              Download and print a list of all firms
            </PDFDownloadLink>
          )}
        </EListings>
        <WListings cyTranscript={cyTranscript}>
          {isClient && (
            <PDFDownloadLink
              showCy
              document={<WelshListings />}
              fileName="Script for Travel Insurance Directory Video"
              style={{ color: "#003d8e" }}
            >
              Lawrlwythwch ac argraffwch restr o'r holl gwmnïau
            </PDFDownloadLink>
          )}
        </WListings>
      </div>

      {/* No firms returned from filtering */}
      {isFilter ? (
        <Loading />
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
              <CompanyCard
                key={i}
                sizes={{ xs: 12, lg: 8 }}
                data={selectedFirm}
                currentLng={i18n.language}
              />
            );
          })
        )
      ) : (
        <Loading />
      )}
      {/* Pagination */}
      {offered && offered.length > 0 && totalPages > 1 ? (
        <Pagination
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
export default Results;
