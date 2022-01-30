import styled from "styled-components";
import Anchor from "../Anchor";
import List from "../List";
import StyledLink from "../StyledLink";
import UnstyledLink from "../UnstyledLink";
import posts from "./Blog/dummyPosts";

const Style = styled.div``;

const Home = () => {
  return (
    <Style>
      <h2>
        <UnstyledLink to="/blog">blog</UnstyledLink>
      </h2>
      <List spacious>
        {posts.map((post) => (
          <li key={post.title}>
            <StyledLink to={`/blog/${post.id}`}>{post.title}</StyledLink>
          </li>
        ))}
      </List>

      <h2>portfolio</h2>
      <List>
        <li>
          <Anchor href="https://www.wubbyprint.com/" target="_blank">
            Wubby Print
          </Anchor>
        </li>
      </List>

      <h2>projects</h2>
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
      
      <h2>random</h2>
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
