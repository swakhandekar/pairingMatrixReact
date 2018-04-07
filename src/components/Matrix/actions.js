import {getPairingData} from "../../services/apiServices/pairApi";

export const MatrixActions = {
  BUILD_MATRIX: "BUILD_MATRIX",
  LOAD_MATRIX_FAILED: "LOAD_MATRIX_FAILED",
  LOADING_MATRIX: "LOADING_MATRIX"
};

const buildMatrix = (users = [], pairs = []) => ({
  type: MatrixActions.BUILD_MATRIX,
  users,
  pairs
});

const loadMatrixFailed = () => ({type: MatrixActions.LOAD_MATRIX_FAILED});

const loadingMatrix = () => ({type: MatrixActions.LOADING_MATRIX});

export const fetchMatrix = () => {
  return dispatch => {
    const onSuccess = (response) =>
      dispatch(buildMatrix(response.data.users, response.data.pairs));
    const onError = () => dispatch(loadMatrixFailed());

    dispatch(loadingMatrix());
    return getPairingData()
      .then(onSuccess)
      .catch(onError)
  }
};
