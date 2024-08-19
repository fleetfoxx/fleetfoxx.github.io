import styled from "styled-components";
import Anchor from "../Anchor";
import UnstyledLink from "../UnstyledLink";
import AnimatedBackground from "./AnimatedBackground";

const Style = styled.div`
  grid-area: "bio";
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
`;

const WordMark = styled.h1`
  font-style: italic;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Bio = () => {
  const links = [
    {
      text: "twitch",
      url: "https://twitch.com/fleetfoxx",
    },
    {
      text: "itch.io",
      url: "https://fleetfoxx.itch.io/",
    },
    {
      text: "kofi",
      url: "https://ko-fi.com/fleetfoxx/",
    },
    {
      text: "contact",
      url: "mailto:ff@fleetfoxx.dev"
    }
  ];

  return (
    <Style id="bio">
      <AnimatedBackground width={300} height={300} initialMode="lines" />

      <WordMark>
        <UnstyledLink to="/">fleetfoxx</UnstyledLink>
      </WordMark>

      {links.map((link) => (
        <Anchor key={link.text} rtl href={link.url} target="_blank">
          {link.text}
        </Anchor>
      ))}
    </Style>
  );
};

export default Bio;
