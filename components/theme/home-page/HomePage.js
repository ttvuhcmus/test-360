import React from "react";
import { HomePageStyles } from "./styles/HomePageStyles";
import Nav from "./Nav";
import Info from "./Info";
import About from "./About";
import Expertise from "./Expertise";

const HomePage = () => {
  return (
    <HomePageStyles>
      <Nav></Nav>
      <Info></Info>
      <About></About>
      <Expertise></Expertise>
    </HomePageStyles>
  );
};

export default HomePage;
