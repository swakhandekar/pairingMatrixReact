import {CELL_ACTIONS} from "./actions";

const incrementCellCount = (matrix, rowIndex, cellIndex) => {
  matrix[rowIndex][cellIndex].count += 1;
  return matrix;
};

export const cellReducer = (state, action) => {
  switch (action.type) {
    case CELL_ACTIONS.INCREMENT_COUNT:
      return {
        ...state,
        data: incrementCellCount(state.data, action.rowIndex, action.cellIndex)
      };
    default:
      return state;
  }
};
