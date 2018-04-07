import React from "react";
import {Header} from "./Header/Header";
import {MatrixContainer} from "./Matrix/Matrix";
import {connect} from "react-redux";
import {LoadingBody} from "./utils/LoadingBody/LoadingBody";
import {getPairingData} from "../services/apiServices/pairApi";
import {LoadingState} from "./utils/enums";
import {fetchMatrix} from "./Matrix/actions";

export class App extends React.Component {
  componentDidMount(){
    this.props.fetchMatrix();
  }

  render() {
    const {matrixLoadingState} = this.props;
    return (
      <div>
        <Header/>
        <div className="body">
          <LoadingBody loadingState={matrixLoadingState}>
            <MatrixContainer/>
          </LoadingBody>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  matrixLoadingState: state.matrix.loadingState
});

export const AppContainer = connect(mapStateToProps, {fetchMatrix})(App);
