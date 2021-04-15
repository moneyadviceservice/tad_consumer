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

const AEMAnchor = styled(Anchor)`
    color: #00788F;
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
  color: #000;
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
  background:#c82a87;
  color: #fff;
  border-bottom: 3px solid #ae0060;
  &:hover {
    background: #e244a1;
    border-bottom: 3px solid #C81A7A;
};
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
  border: 1px solid #106098;
  padding: 25px;
  font-size: 16px;
  background: #fff;
  font-weight: 200;
  color: #515151;
  line-height: 20px;
  border-bottom-left-radius: 25px;
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
  AboutBox,
  BrokerOpening,
  AEMAnchor
};
