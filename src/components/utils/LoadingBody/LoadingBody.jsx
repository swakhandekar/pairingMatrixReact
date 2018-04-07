import {LoadingState} from "../enums";
import React from "react";

export const LoadingBody = ({children, loadingState}) => {
  switch (loadingState) {
    case LoadingState.LOADING:
      return (<div>Loading...</div>);
    case LoadingState.FINISHED:
      return children;
    case LoadingState.FAILED:
      return (<div>Failed Loading</div>)
  }
};
