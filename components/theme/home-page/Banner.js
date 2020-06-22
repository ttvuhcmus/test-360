import React from "react";
import { BannerStyles } from "./styles/BannerStyles";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";

const Banner = () => {
  return (
    <BannerStyles>
      <div className="banner center">
        <Container column>
          <h2 className="banner__title">Have a Project on Your Mind</h2>
          <p className="banner__text">
            Improve him believe opinion offered mer and end cheered forbade.
            Friendly as stronger speedily by recurred cheered forbade. Friendly
            as stronger speedily.
          </p>
          <Button whitePrimary bigSize>
            Contact Me
          </Button>
        </Container>
      </div>
    </BannerStyles>
  );
};

export default Banner;
