import {CellActions} from "./actions";

const incrementCellCount = (matrix, rowIndex, cellIndex) => {
  matrix[rowIndex][cellIndex] += 1;
  return matrix;
};

export const cellReducer = (state, action) => {
  switch (action.type) {
    case CellActions.INCREMENT_COUNT:
      return {
        ...state,
        data: incrementCellCount(state.data, action.rowIndex, action.cellIndex),
        colourBuilder: state.colourBuilder.updateMinMax(state.data[action.rowIndex][action.cellIndex])
      };
    default:
      return state;
  }
};
