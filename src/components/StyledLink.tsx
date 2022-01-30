import { Link } from "react-router-dom";
import styled from "styled-components";
import Anchor from "./Anchor";

type Props = {
  rtl?: boolean;
};

const StyledLink = styled(Link)<Props>`
  display: inline-block;
  color: inherit;
  text-decoration: none;
  position: relative;
  padding: 0.1rem 0.2rem;

  &:after {
    content: "";
    position: absolute;
    ${(props) => (props.rtl ? "right: 0;" : "left: 0;")}
    bottom: 0;
    width: 0;
    height: 100%;
    background: white;
    transition: width 0.2s ease;
    mix-blend-mode: difference;
  }

  &:hover:after {
    width: 100%;
  }
`;

export default StyledLink;
