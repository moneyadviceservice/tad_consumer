import styled from "styled-components";
import { Anchor, resolveMedia, Button } from "@moneypensionservice/directories";

const LoginAnchor = styled(Anchor)`
  ${resolveMedia.md`
    text-align: right;
  `}
`;

export { LoginAnchor };
