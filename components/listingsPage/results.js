import {
  Paragraph,
  Col,
  Row,
  Pagination,
  Anchor,
} from "@moneypensionservice/directories";

import { i18n } from "../../Utils/translation/i18n";
import { useSelector } from "react-redux";
import { useState } from "react";

import ReactHtmlParser from "react-html-parser";

import { DummyCard, CompanyName, SubHead, CommsInfo, Comms } from "./dummy";
import Loading from "./loading";
const Results = ({ t }) => {
  const offered = useSelector((state) => state.listings.offered);

  const [currentPage, setCurrentPage] = useState(1);
  const [firmsPerPage, setFirmsPerPage] = useState(5);

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
  console.log(totalPages);
  return (
    <div>
      <Paragraph
        style={{
          marginTop: 0,
          marginBottom: 0,
          background: "#edf0f0",
          borderRadius: "5px",
          padding: "15px 18px",
          width: "100%",
          display: "flex",
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
      </Paragraph>

      {offered ? (
        offered.length == 0 ? (
          <Paragraph
            margin={{
              top: "40px",
              bottom: "40px",
            }}
          >
            There are no results matching your search criteria. Please amend
            your criteria and try again
          </Paragraph>
        ) : (
          currentFirms.map((selectedFirm, i) => {
            return (
              <DummyCard key={i}>
                <Row style={{ marginBottom: "20px" }}>
                  <Col sizes={{ xs: 12 }}>
                    <CompanyName>{selectedFirm.company}</CompanyName>
                  </Col>
                  <Col sizes={{ xs: 12, md: 4 }}>
                    <SubHead> {t("firms.getInTouch")}</SubHead>
                    <CommsInfo>
                      {ReactHtmlParser(t("firms.phoneImg"))} &#160;
                      <Comms>{selectedFirm.online.phone}</Comms>
                    </CommsInfo>
                    <CommsInfo>
                      {ReactHtmlParser(t("firms.webImg"))} &#160;{" "}
                      <Comms>
                        <Anchor
                          href={selectedFirm.online.website}
                          target="_blank"
                        >
                          Website
                        </Anchor>
                      </Comms>
                    </CommsInfo>
                    <CommsInfo>
                      {ReactHtmlParser(t("firms.emailImg"))} &#160;{" "}
                      <Comms>Email</Comms>
                    </CommsInfo>
                  </Col>
                  <Col sizes={{ xs: 12, md: 8 }}>
                    <SubHead>{t("firms.moreInfo")}</SubHead>
                    <section>{ReactHtmlParser(t("firms.more"))}</section>
                  </Col>
                </Row>
              </DummyCard>
            );
          })
        )
      ) : (
        <Loading />
      )}

      {offered && offered.length > 0 && totalPages > 1 ? (
        <Pagination
          currentLng={i18n.language}
          currentPage={currentPage}
          totalPages={totalPages}
          nextClick={() => setCurrentPage(currentPage + 1)}
          prevClick={() => setCurrentPage(currentPage - 1)}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Results;
