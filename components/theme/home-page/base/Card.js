import React from "react";
import { CardStyles } from "./styles/CardStyles";

const Card = ({ icon, title, text }) => {
  return (
    <CardStyles>
      <div
        className="card__icon center"
        dangerouslySetInnerHTML={{ __html: icon }}
      >
        {/* <i className="fas fa-tag n"></i> */}
      </div>
      <h6 className="card__title">{title}</h6>
      <p className="card__text">{text}</p>
    </CardStyles>
  );
};

export default Card;
