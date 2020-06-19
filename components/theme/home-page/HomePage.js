import React from "react";
import Nav from "./Nav";
import Info from "./Info";
import About from "./About";
import { HomePageStyles } from "./styles/HomePageStyles";

const HomePage = () => {
  return (
    <HomePageStyles>
      <Nav></Nav>
      <Info></Info>
      <About></About>
    </HomePageStyles>
  );
};

export default HomePage;
