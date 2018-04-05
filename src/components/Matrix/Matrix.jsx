import React from "react";
import {MatrixRow} from "./MatrixRow/MatrixRow";
import "./matrix.scss";
import {connect} from "react-redux";

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

const mapStateToProps = (state) => ({
  length: state.matrix.data.length,
  loadingState: state.matrix.loadingState
});

export const MatrixContainer = connect(mapStateToProps, {})(Matrix);
