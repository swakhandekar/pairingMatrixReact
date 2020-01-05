import React from "react";
import "./matrixCell.scss";
import {connect} from "react-redux";
import {incrementCount} from "./actions";

export const MatrixCell = ({rowIndex, cellIndex, value, incrementCount, colourBuilder}) => {
  const colour = colourBuilder.getColour(value);
  return (
    <div
      className={`matrix-cell-${rowIndex}-${cellIndex}`}
      onClick={() => incrementCount(rowIndex, cellIndex)}
      style={{background: `rgb(${colour.r}, ${colour.g}, ${colour.b})`}}
    >
      {value}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  value: state.matrix.data[props.rowIndex][props.cellIndex],
  colourBuilder: state.matrix.colourBuilder
});

export const MatrixCellContainer = connect(
  mapStateToProps,
  {incrementCount}
)(MatrixCell);
