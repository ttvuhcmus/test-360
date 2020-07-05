import React from "react";
import { BlogStyles } from "./styles/BlogStyles";
import { Container } from "../../styles/Container";
import Heading from "./base/Heading";
import Post from "./base/Post";
import Slider from "react-slick";

const Blog = () => {
  const settings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 424,
        settings: {
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BlogStyles>
      <div className="blog center">
        <Container center column>
          <Heading text="Blog" title="Latest Updates" center></Heading>
          <ul className="blog__list">
            <Slider {...settings}>
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
            </Slider>
          </ul>
        </Container>
      </div>
    </BlogStyles>
  );
};

export default Blog;
