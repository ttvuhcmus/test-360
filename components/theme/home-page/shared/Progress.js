import React from "react";
import { ProgressStyles } from "./styles/ProgressStyles";

const Progress = ({ name, percent }) => {
  return (
    <ProgressStyles percent={percent}>
      <div className="progress">
        <div className="progress__info">
          <span className="progress__name">{name}</span>
          <span className="progress__percent">{percent}%</span>
        </div>
        <div className="progress__bar"></div>
      </div>
    </ProgressStyles>
  );
};

export default Progress;
