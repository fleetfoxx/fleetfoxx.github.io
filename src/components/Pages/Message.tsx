import { ReactChildren, ReactNode } from "react";
import styled from "styled-components";

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  & > span {
    font-size: 2rem;
    border: 1px solid white;
    padding: 0.1rem 0.5rem;
  }
`;

type Props = {
  children: ReactNode;
};

const Message = ({ children }: Props) => (
  <Style>
    <span>{children}</span>
  </Style>
);

export default Message;
