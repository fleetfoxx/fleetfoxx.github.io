import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Bio from "./components/Bio/Bio";
import Layout from "./components/Layout";
import Tags from "./components/Tags/Tags";

const Content = styled.div`
  grid-area: content;
`;

const App = () => {
  return (
    <Layout className="App">
      <Bio />
      <Tags />
      <Content id="content">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default App;
