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
      {/* <h2>
        <UnstyledLink to="/blog">blog</UnstyledLink>
      </h2>
      <List spacious>
        {posts.map((post) => (
          <li key={post.title}>
            <StyledLink to={`/blog/${post.id}`}>{post.title}</StyledLink>
          </li>
        ))}
      </List> */}

      <h2>games</h2>
      <List>
        <li>
          <Anchor href="https://fleetfoxx.github.io/1-to-20/" target="_blank">
            1-to-20
          </Anchor>
          <span className="description">Sort 20 random numbers from 1 to 1000 without changing the order.</span>
        </li>

        <li>
          <Anchor href="https://fleetfoxx.itch.io/wubbyware" target="_blank">
            WubbyWare
          </Anchor>
          <span className="description">Enjoy your favorite green goblin with fast-paced microgames!</span>
        </li>

        <li>
          <Anchor href="https://fleetfoxx.itch.io/lil-wubby" target="_blank">
            Lil Wubby
          </Anchor>
          <span className="description">A PaymoneyWubby fan game made with Godot I'm working on in my free time.</span>
        </li>

        <li>
          <Anchor href="https://whosebulgeisitanyway.com/" target="_blank">
            Whose BULGE is it Anyway?
          </Anchor>
          <span className="description">
            A silly game where you try to identify fictional characters based on their body parts. (slightly NSFW)
          </span>
        </li>
      </List>

      <h2>silly</h2>
      <List>
        <li>
          <Anchor href="https://tmporter.github.io/play-monkey-rubby/" target="_blank">
            PlayMonkeyRubby
          </Anchor>
          <span className="description">How do you say his name again? A PaymoneyWubby name generator.</span>
        </li>

        <li>
          <Anchor href="https://www.wubbyprint.com/" target="_blank">
            Wubby Print
          </Anchor>
          <span className="description">
            A virtual receipt printer that prints every time someone subscribes to twitch.tv/paymoneywubby. (might be
            broken)
          </span>
        </li>
      </List>

      <h2>misc</h2>
      <List>
        <li>
          <Anchor href="https://yt-backrooms.pages.dev/" target="_blank">
            FewTube
          </Anchor>
          <span className="description">Explore YouTube videos with zero views and default titles.</span>
        </li>

        <li>
          <Anchor href="https://github.com/fleetfoxx/17lands-extensions" target="_blank">
            17Lands Extensions
          </Anchor>
          <span className="description">Adds additional features to the already wonderful 17Lands.com.</span>
        </li>
      </List>

      {/* <h2>random</h2>
      <List>
        <li>
          <Anchor href="https://twitter.com/GymRatWubby" target="_blank">
            @GymRatWubby
          </Anchor>
          <span className="description">
            A (mostly dead) novelty twitter account tracking Wubby's gym progress. The first letter of every tweet spells
            a secret message.
          </span>
        </li>
      </List> */}
    </Style>
  );
};

export default Home;
