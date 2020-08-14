import { Fragment } from "react";
import { DummyCard, CompanyName, SubHead, CommsInfo, Comms } from "./dummy";
import { withTranslation } from "../../Utils/translation/i18n";
import { Col, Row } from "@moneypensionservice/directories";
import ReactHtmlParser from "react-html-parser";

const Loading = ({ t }) => {
  return (
    <Fragment>
      <DummyCard>
        <Row style={{ marginBottom: "20px" }}>
          <Col sizes={{ xs: 12 }}>
            <CompanyName
              style={{ width: "250px", background: "#edf0f0", height: "20px" }}
            />
          </Col>
          <Col sizes={{ xs: 12, md: 4 }}>
            <SubHead
              style={{ background: "#edf0f0", height: "10px", width: "80px" }}
            />
            <CommsInfo style={{ background: "#edf0f0" }}>
              <Comms style={{ width: "50px" }} />
            </CommsInfo>
            <CommsInfo style={{ background: "#edf0f0" }}>
              <Comms style={{ width: "50px" }} />
            </CommsInfo>
            <CommsInfo style={{ background: "#edf0f0" }}>
              <Comms style={{ width: "50px" }} />
            </CommsInfo>
          </Col>
          <Col sizes={{ xs: 12, md: 8 }}>
            <SubHead
              style={{ background: "#edf0f0", height: "10px", width: "80px" }}
            />
            <ul
              style={{ fontSize: "14px", marginTop: "10px", lineHeight: "1.8" }}
            >
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
            </ul>
          </Col>
        </Row>
      </DummyCard>
      <DummyCard>
        <Row style={{ marginBottom: "20px" }}>
          <Col sizes={{ xs: 12 }}>
            <CompanyName
              style={{ width: "250px", background: "#edf0f0", height: "20px" }}
            />
          </Col>
          <Col sizes={{ xs: 12, md: 4 }}>
            <SubHead
              style={{ background: "#edf0f0", height: "10px", width: "80px" }}
            />
            <CommsInfo style={{ background: "#edf0f0" }}>
              <Comms style={{ width: "50px" }} />
            </CommsInfo>
            <CommsInfo style={{ background: "#edf0f0" }}>
              <Comms style={{ width: "50px" }} />
            </CommsInfo>
            <CommsInfo style={{ background: "#edf0f0" }}>
              <Comms style={{ width: "50px" }} />
            </CommsInfo>
          </Col>
          <Col sizes={{ xs: 12, md: 8 }}>
            <SubHead
              style={{ background: "#edf0f0", height: "10px", width: "80px" }}
            />
            <ul
              style={{ fontSize: "14px", marginTop: "10px", lineHeight: "1.8" }}
            >
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
              <li
                style={{
                  background: "#edf0f0",
                  width: "100%",
                  height: "10px",
                  marginBottom: "20px",
                }}
              />
            </ul>
          </Col>
        </Row>
      </DummyCard>
    </Fragment>
  );
};

export default withTranslation("listings", "common", "footer")(Loading);
