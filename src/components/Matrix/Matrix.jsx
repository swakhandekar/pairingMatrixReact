import React from "react";
import {MatrixRow} from "./MatrixRow/MatrixRow";
import "./matrix.scss";

export const Matrix = ({length}) => {
  const getRows = (length) => {
    const rows = [];
    for (let rowIndex = 0; rowIndex < length; rowIndex++) {
      rows.push(<MatrixRow rowIndex={rowIndex} key={`row_${rowIndex}`}/>)
    }
    return rows;
  };

  return (
    <div className="matrix">
      {getRows(length).map(row => row)}
    </div>
  );
};
