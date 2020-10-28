import styled from "styled-components";
import {
  resolveMedia,
  Button,

  Paragraph,
  Anchor,
  Col,
  Row,
  InfoTable,
  Paragraph as P,
} from "@moneypensionservice/directories";


const ParagraphAnchor = styled(Paragraph)`
  display: none;
  ${resolveMedia.md`
    text-align: right;
    margin-top: 20px;
    display: block;
  `}
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 10px 0;
  padding: 0 0 0 0px;
  font-size: 16px;
`;

const ListItem = styled.li`
  list-style-image: none;
  margin-bottom: 12px;
  font-size: 16px;
  display: inline-block;
  color: #515151;
  position: relative;
  padding-left: 30px;
  line-height: 1.5;

  &:before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 10px;
    background-image: url(/assets/Images/MAS_tick-105.svg);
    position: absolute;
    left: 0;
  }
`;

const QuestionButton = styled(Button)`
  width: 100%;
  text-align: center;

  ${resolveMedia.md`
    width: auto;
`};
`;

const YoutubeFrame = styled.iframe.attrs((props) => ({
  frameBorder: 0,
  height: 315,
}))`
  position: relative;
  top: 0;
  left: 0;
`;

const AboutBox = styled(Col)`
  margin: 22px 0 22px 0;
  border: 2px solid #00bebe;
  padding: 25px;
  font-size: 16px;
  background: #fff;
  font-weight: 200;
  color: #515151;
  line-height: 20px;
`;
const BrokerOpening = styled.div`
  padding-left: 30px;
  margin-bottom: 30px;
`;
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
    <P textSize="0.8125rem" weight={700}>
      {content.getInTouch}
    </P>
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
        <img width="20px" src="/assets/Images/web.svg" />
        <Anchor
          margin={{ left: "0.625rem" }}
          width="auto"
          href={content.url}
          target="_blank"
        >
          {content.website}
        </Anchor>
      </Col>
    </Row>
  </InfoTable>
);

export {
  ParagraphAnchor,
  UnorderedList,
  ListItem,
  QuestionButton,
  YoutubeFrame,
  AboutBox,
  BrokerOpening,
  BrokerTable
};
