import React from "react";
import { HomePageStyles } from "./styles/HomePageStyles";
import Nav from "./Nav";
import Info from "./Info";
import About from "./About";
import Expertise from "./Expertise";
import Qualification from "./Qualification";
import Specialized from "./Specialized";
import Portfolio from "./Portfolio";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <HomePageStyles>
      <Nav />
      <Info />
      <About />
      <Expertise />
      <Qualification />
      <Specialized />
      <Portfolio />
      <Banner />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </HomePageStyles>
  );
};

export default HomePage;
