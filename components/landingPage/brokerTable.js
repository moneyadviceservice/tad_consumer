import React from "react";
import {
  Anchor,
  Col,
  Row,
  InfoTable,
  Paragraph as P,
} from "@moneypensionservice/directories";

const BrokerTable = ({ content, ...rest }) => (
  <InfoTable {...rest}>
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
            weight={700}
            textSize="1.375rem"
            color="#18507a"
            href={`tel:${content.telNumber.replace(/\s/g, "")}`}
          >
            {content.telNumber}
          </Anchor>
          <P textSize="1rem">{content.openingHours}</P>
        </Col>
      </Col>
      <Col direction="row">
        <Anchor width="auto" href={content.url} target="_blank">
          {content.website}
        </Anchor>
        <img
          width="18px"
          height="auto"
          src="/assets/Images/external_link.svg"
        />
      </Col>
    </Row>
  </InfoTable>
);

export default BrokerTable;
