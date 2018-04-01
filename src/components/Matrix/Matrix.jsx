import React from "react";
import {MatrixRow} from "./MatrixRow/MatrixRow";
import "./matrix.scss";

export const Matrix = ({length}) => {
  const getRows = (length) => {
    const rows = [];
    for (let i = 0; i < length; i++) {
      rows.push(<MatrixRow key={`row_${i}`}/>)
    }
    return rows;
  };

  return (
    <div className="matrix">
      {getRows(length).map(row => row)}
    </div>
  );
};
