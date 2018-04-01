import React from "react";
import "./matrixCell.scss";

export const MatrixCell = ({rowIndex, cellIndex}) => (
  <div className={`matrix-cell-${rowIndex}-${cellIndex}`}>
    0
  </div>
);
