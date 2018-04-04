import {createStore} from "redux";
import {combineReducers} from "redux";
import {matrixReducer} from "./components/Matrix/reducer";

const combinedReducers = combineReducers({
  matrix: matrixReducer
});

export const store = createStore(combinedReducers);
