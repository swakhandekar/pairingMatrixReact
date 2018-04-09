import {CellActions} from "./MatrixCell/actions";
import {cellReducer} from "./MatrixCell/reducer";
import {LoadingState} from "../utils/enums";
import {MatrixActions} from "./actions";
import {buildMatrix} from "../../services/matrixServices/matrixBuilder";

const initialMatrix = {
  data: [],
  users: [],
  loadingState: LoadingState.LOADING
};

export const matrixReducer = (state = initialMatrix, action) => {
  switch (action.type) {
    case MatrixActions.LOADING_MATRIX:
      return {...state, loadingState: LoadingState.LOADING};
    case MatrixActions.LOAD_MATRIX_FAILED:
      return {...state, loadingState: LoadingState.FAILED};
    case MatrixActions.BUILD_MATRIX:
      return {
        ...state,
        loadingState: LoadingState.FINISHED,
        users: action.users,
        data: buildMatrix(action.users, action.pairs)
      };
    case CellActions.INCREMENT_COUNT:
      return cellReducer(state, action);
    default:
      return state;
  }
};
