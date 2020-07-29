import {
  Paragraph,
  Col,
  Row,
  Pagination,
} from "@moneypensionservice/directories";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const DummyCard = styled.div`
  border: 1px solid #edf0f0;
  min-height: 100px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-top: 20px;
  font-size: 16px;
  box-shadow: 0 1px #a8b2ba;
`;
const CompanyName = styled.h2`
  color: #003d8e;
  border-bottom: 1px solid #edf0f0;
`;

const SubHead = styled.h5`
  margin-top: 20px;
`;

const CommsInfo = styled.div`
  border: 1px solid #edf0f0;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  width: 90%;
`;

const Comms = styled.span`
  vertical-align: super;
  display: inline-block;
`;

const Results = ({ t }) => {
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
      <DummyCard>
        <Row style={{ marginBottom: "20px" }}>
          <Col sizes={{ xs: 12 }}>
            <CompanyName>Travelocity</CompanyName>
          </Col>
          <Col sizes={{ xs: 12, md: 4 }}>
            <SubHead> {t("firms.getInTouch")}</SubHead>
            <CommsInfo>
              {ReactHtmlParser(t("firms.phoneImg"))} &#160;
              <Comms>0801 234 56789</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.webImg"))} &#160; <Comms>Website</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.emailImg"))} &#160; <Comms>Email</Comms>
            </CommsInfo>
          </Col>
          <Col sizes={{ xs: 12, md: 8 }}>
            <SubHead>{t("firms.moreInfo")}</SubHead>
            <section>{ReactHtmlParser(t("firms.more"))}</section>
          </Col>
        </Row>
      </DummyCard>
      <DummyCard>
        <Row style={{ marginBottom: "20px" }}>
          <Col sizes={{ xs: 12 }}>
            <CompanyName>Special Travels</CompanyName>
          </Col>
          <Col sizes={{ xs: 12, md: 4 }}>
            <SubHead> {t("firms.getInTouch")}</SubHead>
            <CommsInfo>
              {ReactHtmlParser(t("firms.phoneImg"))} &#160;
              <Comms>0801 234 56789</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.webImg"))} &#160; <Comms>Website</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.emailImg"))} &#160; <Comms>Email</Comms>
            </CommsInfo>
          </Col>
          <Col sizes={{ xs: 12, md: 8 }}>
            <SubHead>{t("firms.moreInfo")}</SubHead>
            <section>{ReactHtmlParser(t("firms.more"))}</section>
          </Col>
        </Row>
      </DummyCard>
      <DummyCard>
        <Row style={{ marginBottom: "20px" }}>
          <Col sizes={{ xs: 12 }}>
            <CompanyName>Holsurance</CompanyName>
          </Col>
          <Col sizes={{ xs: 12, md: 4 }}>
            <SubHead> {t("firms.getInTouch")}</SubHead>
            <CommsInfo>
              {ReactHtmlParser(t("firms.phoneImg"))} &#160;
              <Comms>0801 234 56789</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.webImg"))} &#160; <Comms>Website</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.emailImg"))} &#160; <Comms>Email</Comms>
            </CommsInfo>
          </Col>
          <Col sizes={{ xs: 12, md: 8 }}>
            <SubHead>{t("firms.moreInfo")}</SubHead>
            <section>{ReactHtmlParser(t("firms.more"))}</section>
          </Col>
        </Row>
      </DummyCard>
      <DummyCard>
        <Row style={{ marginBottom: "20px" }}>
          <Col sizes={{ xs: 12 }}>
            <CompanyName>Olive Travels</CompanyName>
          </Col>
          <Col sizes={{ xs: 12, md: 4 }}>
            <SubHead> {t("firms.getInTouch")}</SubHead>
            <CommsInfo>
              {ReactHtmlParser(t("firms.phoneImg"))} &#160;
              <Comms>0801 234 56789</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.webImg"))} &#160; <Comms>Website</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.emailImg"))} &#160; <Comms>Email</Comms>
            </CommsInfo>
          </Col>
          <Col sizes={{ xs: 12, md: 8 }}>
            <SubHead>{t("firms.moreInfo")}</SubHead>
            <section>{ReactHtmlParser(t("firms.more"))}</section>
          </Col>
        </Row>
      </DummyCard>
      <DummyCard>
        <Row style={{ marginBottom: "20px" }}>
          <Col sizes={{ xs: 12 }}>
            <CompanyName>Daystar Inc</CompanyName>
          </Col>
          <Col sizes={{ xs: 12, md: 4 }}>
            <SubHead> {t("firms.getInTouch")}</SubHead>
            <CommsInfo>
              {ReactHtmlParser(t("firms.phoneImg"))} &#160;
              <Comms>0801 234 56789</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.webImg"))} &#160; <Comms>Website</Comms>
            </CommsInfo>
            <CommsInfo>
              {ReactHtmlParser(t("firms.emailImg"))} &#160; <Comms>Email</Comms>
            </CommsInfo>
          </Col>
          <Col sizes={{ xs: 12, md: 8 }}>
            <SubHead>{t("firms.moreInfo")}</SubHead>
            <section>{ReactHtmlParser(t("firms.more"))}</section>
          </Col>
        </Row>
      </DummyCard>
      <Pagination currentLng="en" currentPage={1} totalPages={20} />
    </div>
  );
};

export default Results;
