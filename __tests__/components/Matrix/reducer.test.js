import {matrixReducer} from "../../../src/components/Matrix/reducer";
import {LoadingState} from "../../../src/components/utils/enums";
import * as cellReducer from "../../../src/components/Matrix/MatrixCell/reducer";
import {CellActions} from "../../../src/components/Matrix/MatrixCell/actions";
import {MatrixActions} from "../../../src/components/Matrix/actions";
import * as matrixBuilder from "../../../src/services/matrixServices/matrixBuilder";

describe('Matrix reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      data: [],
      users: [],
      loadingState: LoadingState.LOADING
    };
  });

  it('should return default state initially', () => {

    const returnedState = matrixReducer(undefined, {type: ""});

    expect(returnedState).toEqual(initialState);
  });

  it('should call cellReducer on INCREMENT_COUNT action', () => {
    const value = "returned";
    spyOn(cellReducer, "cellReducer").and.returnValue(value);

    const returnedValue = matrixReducer(undefined, {type: CellActions.INCREMENT_COUNT});

    expect(cellReducer.cellReducer).toHaveBeenCalledTimes(1);
    expect(returnedValue).toBe(value);
  });

  it('should set loadingState to LOADING on LOADING_MATRIX action', () => {
    initialState.loadingState = LoadingState.FAILED;

    const newState = matrixReducer(initialState, {type: MatrixActions.LOADING_MATRIX});

    expect(newState.loadingState).toEqual(LoadingState.LOADING);
  });

  it('should set loadingState to FAILED on LOAD_MATRIX_FAILED action', () => {
    const newState = matrixReducer(initialState, {type: MatrixActions.LOAD_MATRIX_FAILED});

    expect(newState.loadingState).toEqual(LoadingState.FAILED);
  });

  it('should return state with build matrix on BUILD_MATRIX action', () => {
    const dummyMatrix = [
      [0],
      [3, 0],
      [2, 5, 0]
    ];
    spyOn(matrixBuilder, "buildMatrix").and.returnValue(dummyMatrix);
    const action = {
      type: MatrixActions.BUILD_MATRIX,
      users: [{Name: "default", ID: 34}],
      pairs: []
    };

    const newState = matrixReducer(initialState, action);

    expect(matrixBuilder.buildMatrix).toHaveBeenCalledTimes(1);
    expect(newState).toEqual({
      loadingState: LoadingState.FINISHED,
      data: dummyMatrix,
      users: action.users
    });
  });
});
