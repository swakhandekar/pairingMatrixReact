import {CellActions} from "./MatrixCell/actions";
import {cellReducer} from "./MatrixCell/reducer";
import {LoadingState} from "../utils/enums";
import {MatrixActions} from "./actions";
import {buildMatrix} from "../../services/matrixServices/matrixBuilder";
import {ColourBuilder} from "../../services/matrixServices/colourBuilder";

const initialMatrix = {
  data: [],
  users: [],
  loadingState: LoadingState.LOADING,
  colourBuilder: null
};

const getMinCount = (pairs, totalUsers) => {
  let minCount = 9999999;
  pairs.forEach(pair => {
    if (pair.Count < minCount) minCount = pair.Count;
  });

  if (pairs.length < (totalUsers * (totalUsers - 1)) / 2) {
    return 0;
  }
  return minCount;
};

const getMaxCount = (pairs) => {
  let maxCount = 0;
  pairs.forEach(pair => {
    if (pair.Count > maxCount) maxCount = pair.Count;
  });
  return maxCount;
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
        data: buildMatrix(action.users, action.pairs),
        colourBuilder: new ColourBuilder(getMinCount(action.pairs, action.users.length), getMaxCount(action.pairs))
      };
    case CellActions.INCREMENT_COUNT:
      return cellReducer(state, action);
    default:
      return state;
  }
};
