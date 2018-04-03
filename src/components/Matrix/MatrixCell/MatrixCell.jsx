import React from "react";
import "./matrixCell.scss";
import {connect} from "react-redux";

export const MatrixCell = ({rowIndex, cellIndex, value}) => (
  <div className={`matrix-cell-${rowIndex}-${cellIndex}`}>
    {value}
  </div>
);

const mapStateToProps = (state) => ({
  value: state.sampleReducer.message
});

const mapDispatchToProps = (dispatch) => ({

});

export const MatrixCellContainer = connect(mapStateToProps, mapDispatchToProps)(MatrixCell);
