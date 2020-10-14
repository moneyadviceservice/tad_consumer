import React from "react";
import {
  Anchor,
  Col,
  Row,
  InfoTable,
  Paragraph as P,
} from "@moneypensionservice/directories";

const BrokerTable = ({ heading, content, ...rest }) => (
  <InfoTable title={heading} {...rest}>
    <P margin={{ bottom: "1rem" }}>{content.description}</P>
    <P textSize="0.8125rem" weight={700}>
      {content.getInTouch}
    </P>
    <Col padding="0">
      <Row noGutter padding="0">
        <img width="20px" src="/assets/Images/phone.svg" />
        <Col margin={{ left: "0.625rem" }}>
          <Anchor
            margin="0"
            weight={700}
            textSize="1.375rem"
            color="#18507a"
            href={content.telNumber}
          >
            {content.telNumber}
          </Anchor>
          <P textSize="1rem">{content.openingHours}</P>
        </Col>
      </Row>
      <Row padding="0" align="center">
        <img width="20px" src="/assets/Images/web.svg" />
        <Anchor
          margin={{ left: "0.625rem" }}
          width="auto"
          href="https://insurance.biba.org.uk/find-insurance"
          target="_blank"
        >
          {content.website}
        </Anchor>
      </Row>
    </Col>
  </InfoTable>
);

export default BrokerTable;
