import styled from "styled-components";

export const devices = {
  mobile: `(max-width: 430px)`,
  desktop: `(min-width: 431px)`,
};

const Layout = styled.div`
  display: grid;

  @media ${devices.desktop} {
    grid-template:
      "bio content"
      "tags content" 1fr
      / 300px 1fr;

    & > #content {
      margin-top: 5.6rem;
      margin-left: 3rem;
      margin-right: 1rem;
    }

    & > #bio {
      margin: 1rem;
    }
  }

  @media ${devices.mobile} {
    grid-template:
      "bio"
      "content"
      "tags";

    & > #content {
      margin-left: 3rem;
      margin-right: 3rem;
    }

    & > #bio {
      margin-top: 1rem;
      margin-left: auto;
      margin-right: auto;
    }

    & > #tags {
      margin: 1rem;
    }
  }
`;

export default Layout;
