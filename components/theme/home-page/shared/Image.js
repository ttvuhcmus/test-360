import React from "react";
import { ImageStyles } from "./styles/ImageStyles";

const Image = ({ src, title }) => {
  return (
    <ImageStyles>
      <div className="image">
        <img src={"/" + src} alt="picture" className="image__item" />
      </div>
      <div className="hover">
        <div className="hover__list-icon">
          <i className="fas fa-expand-alt hover__icon"></i>
          <i className="far fa-heart hover__icon"></i>
        </div>
        <span className="hover__title">{title}</span>
      </div>
    </ImageStyles>
  );
};

export default Image;
