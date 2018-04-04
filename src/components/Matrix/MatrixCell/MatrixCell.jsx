import React from "react";
import "./matrixCell.scss";
import {connect} from "react-redux";
import {incrementCount} from "./actions";

export const MatrixCell = ({rowIndex, cellIndex, value, incrementCount}) => (
  <div className={`matrix-cell-${rowIndex}-${cellIndex}`} onClick={() => incrementCount(rowIndex, cellIndex)}>
    {value}
  </div>
);

const mapStateToProps = (state, props) => ({
  value: state.matrix.data[props.rowIndex][props.cellIndex].count
});

export const MatrixCellContainer = connect(
  mapStateToProps,
  {incrementCount}
)(MatrixCell);
