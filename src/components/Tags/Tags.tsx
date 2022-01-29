import styled from "styled-components";
import Anchor from "../Anchor";
import List from "../List";

const Style = styled.div`
  grid-area: tags;
  text-align: right;
`;

const Tags = () => {
  const tags = ["#react", "#javascript", "#memes", "#sideProject"];

  return (
    <Style>
      <h4>tags</h4>
      <List>
        {tags.map((tag) => (
          <li key={tag}>
            <Anchor rtl href="#">
              {tag}
            </Anchor>
          </li>
        ))}
      </List>
    </Style>
  );
};

export default Tags;
