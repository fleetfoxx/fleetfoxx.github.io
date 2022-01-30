import { Fragment } from "react";
import styled from "styled-components";
import StyledLink from "../../StyledLink";
import Dateline from "./Dateline";
import posts, { BlogPost } from "./dummyPosts";

type PostCardProps = {
  post: BlogPost;
};

const PostCardStyle = styled.div`
  margin-bottom: 3rem;
`;

const PostCard = ({ post }: PostCardProps) => {
  return (
    <PostCardStyle className="post-card">
      <h3>
        <StyledLink to={`/blog/${post.id}`}>{post.title}</StyledLink>
      </h3>

      <Dateline>{post.timestamp.toLocaleString()}</Dateline>
    </PostCardStyle>
  );
};

const Blog = () => {
  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
};

export default Blog;
