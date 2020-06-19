import React from "react";
import { InfoStyles } from "./styles/InfoStyles";

const Info = () => {
  return (
    <InfoStyles>
      <div class="info">
        <ul class="info__list-icon">
          <li class="info__icon">
            <i class="fab fa-facebook-f"></i>
          </li>
          <li class="info__icon">
            <i class="fab fa-twitter"></i>
          </li>
          <li class="info__icon">
            <i class="fab fa-linkedin-in"></i>
          </li>
          <li class="info__icon">
            <i class="fab fa-pinterest-p"></i>
          </li>
        </ul>
        <div class="container container--info">
          <h2 class="info__greeting">Hi, I am</h2>
          <h1 class="info__name">Mary Hardy</h1>
          <h2 class="info__job">Digital Marketing Expert</h2>
          <p class="info__intro">
            Shot what able cold new the see hold. Friendly as an betrayed
            formerly <br />
            he. Morning because as to society behaved moments
          </p>
          <div class="info__list-button">
            <button class="btn btn--orange btn--big">Download CV</button>
            <button class="btn btn--white-1 btn--big">Contact Me</button>
          </div>
        </div>
        <div class="info__experience">
          <div class="experience">
            <div class="experience__icon">
              {/* <!-- <i class="fas fa-medal"></i> --> */}
            </div>
            <div class="experience__content">
              <div class="experience__title">8 Years Job</div>
              <div class="experience__explain">Experience</div>
            </div>
          </div>
          <div class="experience">
            <div class="experience__icon">
              {/* <!-- <i class="fas fa-clipboard-list"></i> --> */}
            </div>
            <div class="experience__content">
              <div class="experience__title">500+ Projects</div>
              <div class="experience__explain">Complete</div>
            </div>
          </div>
          <div class="experience">
            <div class="experience__icon">
              {/* <!-- <i class="fas fa-headset"></i> --> */}
            </div>
            <div class="experience__content">
              <div class="experience__title">Support</div>
              <div class="experience__explain">Online 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </InfoStyles>
  );
};

export default Info;
