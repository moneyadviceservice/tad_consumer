import React from "react";
import styled from "styled-components";
import { AEMAnchor as Anchor } from "../landingPage/subComponents"
import {
  Col,
  Row,
  InfoTable,
  Paragraph as P,
} from "@moneypensionservice/directories";

const AEMInfoTable = styled(InfoTable)`
    border: 1px solid #9DA1CA;
    border-bottom-left-radius: 25px;
    h3{
        font-weight: 600;
    padding-top: 30px
`;

const BrokerTable = ({ content, ...rest }) => (
  <AEMInfoTable {...rest} tableColor="none" titleColor="#000">
    <P
      textSize="1rem"
      lineHeight="1.4375rem"
      margin={{ bottom: "1rem" }}
      color="#515151"
    >
      {content.description}
    </P>
    <P>{content.getInTouch}</P>
    <Row direction="column" noGutter padding="0">
      <Col direction="row" align="flex-start">
        <img width="20px" src="/assets/Images/phone.svg" />
        <Col padding="0" margin={{ left: "0.625rem" }}>
          <Anchor
            margin="0"
            weight={100}
            textSize="1rem"
            color="#000"
            href={`tel:${content.telNumber.replace(/\s/g, "")}`}
          >
            {content.telNumber}
          </Anchor>
          <P textSize="1rem">{content.openingHours}</P>
        </Col>
      </Col>
      <Col direction="row">
        
        <img
        
        width="20"
          src="/assets/Images/web-old.svg"
        />
        <Anchor width="auto" href={content.url} target="_blank" style={{ marginBottom : "0", paddingLeft: "10px"}}>
          {content.website}
        </Anchor>
      </Col>
    </Row>
  </AEMInfoTable>
);

export default BrokerTable;
