import React from "react";
import { BlogStyles } from "./styles/BlogStyles";
import { Container } from "../../styles/Container";
import Heading from "./shared/Heading";
import Post from "./shared/Post";

const Blog = () => {
  return (
    <BlogStyles>
      <div className="blog">
        <Container center column>
          <Heading text="Blog" title="Latest Updates" center></Heading>
          <ul className="blog__list">
            <Post
              src="/img/laptop.jpg"
              date="01 JAN 2020"
              text="Forfeited you engrossed but gay some"
            />
            <Post
              src="/img/iphonex.jpg"
              date="01 JAN 2020"
              text="Forfeited you engrossed but gay some"
            />
            <Post
              src="/img/mobile.jpg"
              date="01 JAN 2020"
              text="Forfeited you engrossed but gay some"
            />
          </ul>
        </Container>
      </div>
    </BlogStyles>
  );
};

export default Blog;
