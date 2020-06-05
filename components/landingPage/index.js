import styled from "styled-components";
import { Anchor, resolveMedia, Button } from "@moneypensionservice/directories";

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
    width: 25%;
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
export { LoginAnchor, UnorderedList, ListItem, QuestionButton, YoutubeFrame };
