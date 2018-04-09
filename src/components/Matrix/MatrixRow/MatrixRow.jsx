import React from "react";
import {MatrixCellContainer} from "../MatrixCell/MatrixCell";
import {MyCard} from "../../utils/MyCard/MyCard";
import "./matrixRow.scss";
import {UserCellContainer} from "../UserCell/UserCell";

export const MatrixRow = ({rowIndex}) => {
  const getCells = (rowIndex) => {
    const cells = [];

    for (let cellIndex = 0; cellIndex <= rowIndex; cellIndex++) {
      if (cellIndex === rowIndex) {
        cells.push(
          <MyCard key={`card-${rowIndex}`}>
            <UserCellContainer index={rowIndex}/>
          </MyCard>
        )
      }
      else {
        cells.push(
          <MyCard key={`card-${rowIndex}-${cellIndex}`}>
            <MatrixCellContainer
              rowIndex={rowIndex}
              cellIndex={cellIndex}
            />
          </MyCard>
        );
      }
    }
    return cells;
  };

  return (
    <div className={`row_${rowIndex}`}>
      {getCells(rowIndex).map(cell => (cell))}
    </div>
  )
};
