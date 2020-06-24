import styled from "styled-components";
import {
  Anchor,
  resolveMedia,
  Button,
  Col,
  Paragraph,
} from "@moneypensionservice/directories";

const ParagraphAnchor = styled(Paragraph)`
  display: none;
  ${resolveMedia.md`
    text-align: right;
    margin-top:20px;
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
  &:before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 10px;
    background-image: url(/assets/Images/MAS_tick-102.svg);
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

const InfoTable = styled.table`
  margin: 22px 11px;
  border: 4px solid #00bebe;
  padding: 20px 30px;
  font-size: 15px;
  background: #fff;
  font-weight: 400;
`;

const InfoTableHead = styled.thead`
  background: #00bebe;
`;

const InfoTH = styled.th`
  color: #fff;
  text-align: left;
  height: 50px;
  font-size: 20px;
  padding-left: 20px;
`;

const InfoTD = styled.td`
  padding: 20px;
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

export {
  ParagraphAnchor,
  UnorderedList,
  ListItem,
  QuestionButton,
  YoutubeFrame,
  InfoTable,
  InfoTableHead,
  InfoTH,
  InfoTD,
  AboutBox,
  BrokerOpening,
};
