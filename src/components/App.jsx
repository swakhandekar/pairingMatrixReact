import React from "react";
import {Header} from "./Header/Header";
import {MatrixContainer} from "./Matrix/Matrix";
import {connect} from "react-redux";
import {LoadingBody} from "./utils/LoadingBody/LoadingBody";

export const App = ({matrixLoadingState}) => (
  <div>
    <Header/>
    <div className="body">
      <LoadingBody loadingState={matrixLoadingState}>
        <MatrixContainer/>
      </LoadingBody>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  matrixLoadingState: state.matrix.loadingState
});

export const AppContainer = connect(mapStateToProps, {})(App);
