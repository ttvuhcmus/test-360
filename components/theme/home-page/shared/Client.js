import React from "react";
import { ClientStyles } from "./styles/ClientStyles";

const Client = ({ src, name, regency, rating }) => {
  const countRating = parseInt(rating);
  let element = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= countRating) {
      element += '<i class="fas fa-star"></i>';
    } else {
      element += '<i class="far fa-star"></i>';
    }
  }

  return (
    <ClientStyles>
      <div className="client">
        <div className="client__user center">
          <img src={src} alt="avatar" className="client__avatar" />
          <div className="client__card">
            <div className="client__info">
              <span className="client__name">{name}</span>
              <span className="client__regency">{regency}</span>
            </div>
            <div
              className="client__rating"
              dangerouslySetInnerHTML={{ __html: element }}
            ></div>
          </div>
        </div>

        <p className="client__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          repellendus possimus molestiae natus reiciendis cumque laboriosam
          blanditiis itaque. A, voluptas dicta.
        </p>
      </div>
    </ClientStyles>
  );
};

export default Client;
