import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Bio from "./components/Bio/Bio";
import Tags from "./components/Tags/Tags";

const Layout = styled.div`
  display: grid;
  grid-template:
    "bio content" 300px
    "tags content" 1fr
    / 300px 1fr;
`;

const App = () => {
  return (
    <Layout className="App">
      <Bio />
      <Tags />
      <Outlet />
    </Layout>
  );
};

export default App;
