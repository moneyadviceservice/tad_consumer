import styled from "styled-components";
import {
  Anchor,
  resolveMedia,
  Button,
  Col,
} from "@moneypensionservice/directories";

const LoginAnchor = styled(Anchor)`
  ${resolveMedia.md`
    text-align: right;
  `}
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 10px 50px 10px 0;
  padding: 0 0 0 25px;
`;

const ListItem = styled.li`
  list-style-image: url(/assets/Images/tick.svg);
  margin-bottom: 12px;
  font-size: 16px;
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

const DisclaimerBox = styled(Col)`
  margin: 22px 11px;
  border: 4px solid #00bebe;
  padding: 20px 30px;
  font-size: 18px;
  background: #fff;
  font-weight: 400;
`;
const BrokerOpening = styled.div`
  padding-left: 30px;
  margin-bottom: 30px;
`;
export {
  LoginAnchor,
  UnorderedList,
  ListItem,
  QuestionButton,
  YoutubeFrame,
  InfoTable,
  InfoTableHead,
  InfoTH,
  InfoTD,
  DisclaimerBox,
  BrokerOpening,
};
