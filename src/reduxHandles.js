import {createStore} from "redux";
import {combineReducers} from "redux";

const defaultState = {
  message: "Hello!"
};

const sampleReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  sampleReducer
});

export const store = createStore(combinedReducers);
