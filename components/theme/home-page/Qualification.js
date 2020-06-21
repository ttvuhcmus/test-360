import React from "react";
import { QualificationStyles } from "./styles/QualificationStyles";
import { Container } from "../../styles/Container";
import Heading from "./shared/Heading";

const Qualification = () => {
  return (
    <QualificationStyles>
      <div className="qualification center">
        <Container qualification>
          <Heading text="My Qualification" title="Awesome Journey" center />
          <div className="qualification__row">
            <div className="qualification__list">
              <h4 className="qualification__heading">
                <i class="fas fa-graduation-cap"></i>
                Education
              </h4>

              <div className="qualification__item">
                <h6 className="qualification__job">
                  Master of Business Administration
                </h6>
                <span className="qualification__position">Management</span>
                <div className="qualification__time">
                  <i class="fas fa-calendar-alt"></i>
                  2011-2014
                </div>
              </div>

              <div className="qualification__item">
                <h6 className="qualification__job">
                  Honours of Business Administration
                </h6>
                <span className="qualification__position">Management</span>
                <div className="qualification__time">
                  <i class="fas fa-calendar-alt"></i>
                  2009-2011
                </div>
              </div>

              <div className="qualification__item">
                <h6 className="qualification__job">
                  Secondary School Certificate
                </h6>
                <span className="qualification__position">Business</span>
                <div className="qualification__time">
                  <i class="fas fa-calendar-alt"></i>
                  2005-2009
                </div>
              </div>
            </div>

            <div className="qualification__list">
              <h4 className="qualification__heading">
                <i class="fas fa-graduation-cap"></i>
                Experience
              </h4>

              <div className="qualification__item">
                <h6 className="qualification__job">
                  Envato Themeforest Multi National
                </h6>
                <span className="qualification__position">Author</span>
                <div className="qualification__time">
                  <i class="fas fa-calendar-alt"></i>
                  2016-2019
                </div>
              </div>

              <div className="qualification__item">
                <h6 className="qualification__job">
                  Global IT international Limitted
                </h6>
                <span className="qualification__position">Admind</span>
                <div className="qualification__time">
                  <i class="fas fa-calendar-alt"></i>
                  2013-2016
                </div>
              </div>

              <div className="qualification__item">
                <h6 className="qualification__job">Instructory Global</h6>
                <span className="qualification__position">
                  Head of Business Development
                </span>
                <div className="qualification__time">
                  <i class="fas fa-calendar-alt"></i>
                  2011-2013
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </QualificationStyles>
  );
};

export default Qualification;
