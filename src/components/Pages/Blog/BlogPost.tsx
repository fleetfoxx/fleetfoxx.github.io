import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import StyledLink from "../../StyledLink";
import Dateline from "./Dateline";
import posts from "./dummyPosts";

const Style = styled.article`
  width: 100%;

  & > .content > p {
    font-size: 1.1rem;
  }
`;

const BlogPost = () => {
  const { id } = useParams();
  const post = useMemo(() => {
    return posts.find((post) => post.id === id);
  }, [id]);

  return (
    <Style id={id}>
      {!post ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2>{post.title}</h2>
          <Dateline>{post.timestamp.toLocaleString()}</Dateline>
          <hr />
          <ReactMarkdown className="content" remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
          <StyledLink rtl to="/blog">
            ↸ back
          </StyledLink>
        </>
      )}
    </Style>
  );
};

export default BlogPost;
