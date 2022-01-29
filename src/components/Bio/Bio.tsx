import styled from "styled-components";
import Anchor from "../Anchor";
import AnimatedBackground from "./AnimatedBackground";

const Style = styled.div`
  grid-area: "bio";
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 2px solid white;
  border-right-width: 0;
  border-right-width: 0;
  border-radius: 20rem;

  & > canvas {
    border-radius: 20rem;
    overflow: hidden;
  }
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
      <AnimatedBackground width={300} height={300} />

      <h1>fleetfoxx</h1>

      {links.map((link) => (
        <Anchor key={link.text} rtl href={link.url} target="_blank">
          {link.text}
        </Anchor>
      ))}
    </Style>
  );
};

export default Bio;
