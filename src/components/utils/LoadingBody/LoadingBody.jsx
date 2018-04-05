import {LOADING_STATE} from "../enums";
import React from "react";

export const LoadingBody = ({children, loadingState}) => {
  switch (loadingState) {
    case LOADING_STATE.LOADING:
      return (<div>Loading...</div>);
    case LOADING_STATE.FINISHED:
      return children;
    case LOADING_STATE.FAILED:
      return (<div>Failed Loading</div>)
  }
};
