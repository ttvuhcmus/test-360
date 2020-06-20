import React from "react";
import { ExpertiseStyles } from "./styles/ExpertiseStyles";
import { Container } from "../../styles/Container";
import Progress from "./shared/Progress";
import Heading from "./shared/Heading";

const Expertise = () => {
  return (
    <ExpertiseStyles>
      <div className="expertise center">
        <Container expertise>
          <Heading
            text="Why Choose Me"
            title="My Expertise Area"
            center
          ></Heading>
          <ul className="expertise__list">
            <Progress name="Facebook Marketing" percent="90"></Progress>
            <Progress name="Affiliate Marketig" percent="90"></Progress>
            <Progress name="Search Engine Optimization" percent="80"></Progress>
            <Progress name="Graphic Design" percent="80"></Progress>
            <Progress name="Content Writing" percent="90"></Progress>
            <Progress name="Web Ui Design" percent="90"></Progress>
            <Progress name="Youtube Marketing" percent="85"></Progress>
            <Progress name="Web Design" percent="85"></Progress>
          </ul>
        </Container>
      </div>
    </ExpertiseStyles>
  );
};

export default Expertise;
