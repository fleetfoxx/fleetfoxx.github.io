import styled from "styled-components";
import Anchor from "./Anchor";

const GlitchAnchor = styled(Anchor)`
  &:after {
    content: none;
  }
`;

export default GlitchAnchor;
