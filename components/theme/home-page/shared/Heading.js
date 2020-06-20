import React from "react";
import { HeadingStyles } from "./styles/HeadingStyles";

const Heading = ({ text, title, center }) => {
  return (
    <HeadingStyles center={center}>
      <div className="heading">
        <h3 className="heading__text">{text}</h3>
        <h2 className="heading__title">{title}</h2>
      </div>
    </HeadingStyles>
  );
};

export default Heading;
