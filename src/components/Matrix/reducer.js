import {CELL_ACTIONS} from "./MatrixCell/actions";
import {cellReducer} from "./MatrixCell/reducer";
import {LOADING_STATE} from "../utils/enums";
import {MatrixActions} from "./actions";
import {buildMatrix} from "../../services/matrixServices/matrixBuilder";

const initialMatrix = {
  data: [],
  loadingState: LOADING_STATE.LOADING
};

export const matrixReducer = (state = initialMatrix, action) => {
  switch (action.type) {
    case MatrixActions.LOADING_MATRIX:
      return {...state, loadingState: LOADING_STATE.LOADING};
    case MatrixActions.LOAD_MATRIX_FAILED:
      return {...state, loadingState: LOADING_STATE.FAILED};
    case MatrixActions.BUILD_MATRIX:
      return {
        ...state,
        loadingState: LOADING_STATE.FINISHED,
        data: buildMatrix(action.users, action.pairs)
      };
    case CELL_ACTIONS.INCREMENT_COUNT:
      return cellReducer(state, action);
    default:
      return state;
  }
};
