import {CELL_ACTIONS} from "./MatrixCell/actions";
import {cellReducer} from "./MatrixCell/reducer";
import {LOADING_STATE} from "../utils/enums";

const initialMatrix = {
  data: [],
  loadingState: LOADING_STATE.LOADING
};

export const matrixReducer = (state = initialMatrix, action) => {
  switch (action.type) {
    case CELL_ACTIONS.INCREMENT_COUNT:
      return cellReducer(state, action);
    default:
      return state;
  }
};
