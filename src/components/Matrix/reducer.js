import {CELL_ACTIONS} from "./MatrixCell/actions";
import {cellReducer} from "./MatrixCell/reducer";

const initialMatrix = {
  data: [
    [{count: 0}],
    [{count: 5}, {count: 8}],
    [{count: 2}, {count: 0}, {count: 3}]
  ]
};

export const matrixReducer = (state = initialMatrix, action) => {
  switch (action.type) {
    case CELL_ACTIONS.INCREMENT_COUNT:
      return cellReducer(state, action);
    default:
      return state;
  }
};
