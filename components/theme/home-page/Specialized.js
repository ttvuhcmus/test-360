import React from "react";
import { SpecializedStyles } from "./styles/SpecializedStyles";
import { Container } from "../../styles/Container";
import Heading from "./base/Heading";
import Slider from "react-slick";
import Card from "./base/Card";

const Specialized = () => {
  const settings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3,
        },
      },
      {
        breakpoint: 360,
        settings: {
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <SpecializedStyles>
      <div className="specialized">
        <Container column>
          <Heading text="Specialized In" title="What I Offer" center />
          <ul className="specialized__list">
            <Slider {...settings}>
              <Card
                icon='<i class="fas fa-volume-up"></i>'
                title="SEO"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus corrupti aut."
              ></Card>
              <Card
                icon='<i class="fas fa-tag n"></i>'
                title="Facebook Marketing"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus corrupti aut."
              ></Card>
              <Card
                icon='<i class="fab fa-youtube"></i>'
                title="Youtube Marketing"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus corrupti aut."
              ></Card>
              <Card
                icon='<i class="fas fa-pencil-alt"></i>'
                title="Content Writing"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus corrupti aut."
              ></Card>
              <Card
                icon='<i class="fas fa-carrot"></i>'
                title="Web Design"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus corrupti aut."
              ></Card>
              <Card
                icon='<i class="fas fa-balance-scale"></i>'
                title="Design Graphic"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus corrupti aut."
              ></Card>
            </Slider>
          </ul>
        </Container>
      </div>
    </SpecializedStyles>
  );
};

export default Specialized;
