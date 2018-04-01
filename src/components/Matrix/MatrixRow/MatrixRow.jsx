import React from "react";
import {MatrixCell} from "../MatrixCell/MatrixCell";
import "./matrixRow.scss";

export const MatrixRow = ({rowIndex}) => {
  const getCells = (rowIndex) => {
    const cells = [];

    for (let cellIndex = 0; cellIndex <= rowIndex; cellIndex++) {
      cells.push(
        <MatrixCell
          i={rowIndex}
          j={cellIndex}
          key={`matrix-cell-${rowIndex}-${cellIndex}`}
        />
      );
    }
    return cells;
  };

  return (
    <div className={`row_${rowIndex}`}>
      {getCells(rowIndex).map(cell => (cell))}
    </div>
  )
};
