import React from "react";
import { PortfolioStyles } from "./styles/PortfolioStyles";
import { Container } from "../../styles/Container";
import Heading from "./shared/Heading";
import { Button } from "../../styles/Button";
import Image from "./shared/Image";

const Portfolio = () => {
  return (
    <PortfolioStyles>
      <div className="portfolio center">
        <Container center column>
          <Heading text="My Portfolio" title="Recent Works" center></Heading>

          <ul className="list-menu">
            <li className="list-menu__item">
              <a href="#" className="list-menu__link">
                All Projects
              </a>
            </li>
            <li className="list-menu__item">
              <a href="#" className="list-menu__link">
                Web Design
              </a>
            </li>
            <li className="list-menu__item">
              <a href="#" className="list-menu__link">
                Mobile App
              </a>
            </li>
            <li className="list-menu__item">
              <a href="#" className="list-menu__link">
                Graphic Design
              </a>
            </li>
          </ul>

          <ul className="list-image">
            <Image src="smart-watch.jpg" title="Graphic Design" />
            <Image src="iphone.jpg" title="Mobile App" />
            <Image src="headphone.jpg" title="Graphic Design" />
            <Image src="macbook1.jpg" title="Web Design" />
            <Image src="iphone11.jpg" title="Mobile App" />
            <Image src="macbook2.jpg" title="Web Design" />
          </ul>

          <Button primary bigSize>
            View All
          </Button>
        </Container>
      </div>
    </PortfolioStyles>
  );
};

export default Portfolio;
