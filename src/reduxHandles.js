import {applyMiddleware, createStore} from "redux";
import {combineReducers} from "redux";
import {matrixReducer} from "./components/Matrix/reducer";
import thunk from "redux-thunk";

const combinedReducers = combineReducers({
  matrix: matrixReducer
});

export const store = createStore(
  combinedReducers,
  applyMiddleware(thunk)
);
