import React from "react";
import {MatrixCellContainer} from "../MatrixCell/MatrixCell";
import {MyCard} from "../../utils/MyCard/MyCard";
import "./matrixRow.scss";

export const MatrixRow = ({rowIndex}) => {
  const getCells = (rowIndex) => {
    const cells = [];

    for (let cellIndex = 0; cellIndex <= rowIndex; cellIndex++) {
      cells.push(
        <MyCard key={`matrix-cell-${rowIndex}-${cellIndex}`}>
          <MatrixCellContainer
            rowIndex={rowIndex}
            cellIndex={cellIndex}
          />
        </MyCard>
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
