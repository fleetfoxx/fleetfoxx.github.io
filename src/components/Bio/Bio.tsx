import styled from "styled-components";
import Anchor from "../Anchor";
import GlitchAnchor from "../GlitchAnchor";
import AnimatedBackground from "./AnimatedBackground";

const Style = styled.div`
  grid-area: "bio";
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;

const WordMark = styled.h1`
  font-style: italic;
  font-size: 2.5rem;
`;

const Bio = () => {
  const links = [
    {
      text: "twitter",
      url: "https://twitter.com/fleetfoxx",
    },
    {
      text: "twitch",
      url: "https://twitch.com/fleetfoxx",
    },
    {
      text: "soundcloud",
      url: "#",
    },
  ];

  return (
    <Style>
      <AnimatedBackground width={300} height={300} initialMode="lines" />

      <WordMark>
        <GlitchAnchor href="/">fleetfoxx</GlitchAnchor>
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
