import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/Pages/Home";
import Blog from "./components/Pages/Blog/Blog";
import _404 from "./components/Pages/_404";
import UnderConstruction from "./components/Pages/UnderConstruction";
import "./index.css";
import BlogPost from "./components/Pages/Blog/BlogPost";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blog">
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogPost />} />
          </Route>
          <Route path="construction" element={<UnderConstruction />} />
          <Route path="*" element={<_404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
