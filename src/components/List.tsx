import styled from "styled-components";

type Props = {
  spacious?: boolean;
}

const List = styled.ul<Props>`
  padding: 0;
  list-style: none;

  & > li {
    margin-bottom: ${props => props.spacious ? "0.5rem" : "initial"};
  }
`;

export default List;
