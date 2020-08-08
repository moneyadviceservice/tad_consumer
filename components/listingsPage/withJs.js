import {
  Paragraph,
  Col,
  Row,
  Pagination,
  Anchor,
} from "@moneypensionservice/directories";

import { i18n } from "../../Utils/translation/i18n";
import { useSelector } from "react-redux";

import ReactHtmlParser from "react-html-parser";

import { DummyCard, CompanyName, SubHead, CommsInfo, Comms } from "./dummy";
import Loading from "./loading";
const WithJs = ({ t }) => {
  const offered = useSelector((state) => state.data.offered);
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
        }}
      >
        {t("headings.showing")} 1 -10 {t("headings.of")} 1000{" "}
        {t("headings.firms")}
      </Paragraph>

      {offered ? (
        offered.length == 0 ? (
          <Paragraph margin={{ top: "40px", bottom: "40px" }}>
            There are no results matching your search criteria. Please amend
            your criteria and try again
          </Paragraph>
        ) : (
          offered.map((selectedFirm, i) => {
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

      <Pagination currentLng={i18n.language} currentPage={1} totalPages={20} />
    </div>
  );
};
export default WithJs;