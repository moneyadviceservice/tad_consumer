import styled from "styled-components";
import { Row, resolveMedia } from "@moneypensionservice/directories";

const Section = styled(Row)`
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  ${resolveMedia.md`
   padding: 0;
`};
`;

const ExtendedSection = styled(Row)`
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #cbdae0;
`;

export { Section, ExtendedSection };