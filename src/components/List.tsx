import styled from "styled-components";

type Props = {
  spacious?: boolean;
}

const List = styled.ul<Props>`
  padding: 0;
  list-style: none;

  & > li {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    
    & > .description {
      opacity: 0.7;
      font-size: 0.9em;
      padding-left: 4px;
    }
  }
`;

export default List;
