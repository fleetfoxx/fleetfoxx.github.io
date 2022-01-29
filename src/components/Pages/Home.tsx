import styled from "styled-components";
import Anchor from "../Anchor";
import List from "../List";

const Style = styled.div`
`;

const Home = () => {
  return (
    <Style>
      <h1>blog</h1>
      <List>
        <li>
          <Anchor href="#">
            How the 90s toy Skannerz played a pivotal role in arresting the
            Golden State Killer.
          </Anchor>
        </li>
        <li>
          <Anchor href="#">
            Why I refuse to watch any movie made in July of 2010.
          </Anchor>
        </li>
      </List>
      <h1>portfolio</h1>
      <List>
        <li>
          <Anchor href="https://www.wubbyprint.com/" target="_blank">
            Wubby Print
          </Anchor>
        </li>
      </List>
      <h1>projects</h1>
      <List>
        <li>
          <Anchor href="#">InfiniTree</Anchor>
        </li>
        <li>
          <Anchor href="#">Liminal Spaces VR</Anchor>
        </li>
        <li>
          <Anchor href="#">Mung</Anchor>
        </li>
      </List>
      <h1>random</h1>
      <List>
        <li>
          <Anchor href="https://twitter.com/GymRatWubby" target="_blank">
            @GymRatWubby
          </Anchor>
        </li>
      </List>
    </Style>
  );
};

export default Home;
