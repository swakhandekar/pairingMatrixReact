import {shallow} from "enzyme";
import React from "react";
import {App} from "../../src/components/App";
import {Header} from "../../src/components/Header/Header";
import {MatrixContainer} from "../../src/components/Matrix/Matrix";
import {LoadingState} from "../../src/components/utils/enums";
import {LoadingBody} from "../../src/components/utils/LoadingBody/LoadingBody";

describe('App', () => {
  const mockFetchMatrix = jest.fn();
  const matrixLoadingState = LoadingState.FINISHED;
  const getComponent = () => shallow(
    <App
      matrixLoadingState={matrixLoadingState}
      fetchMatrix={mockFetchMatrix}
    />
  );
  let component;

  beforeEach(() => {
    component = getComponent();
  });

  it('should render', () => {
    expect(component.exists());
  });

  it('should have a header', () => {
    const header = component.find(<Header/>);

    expect(header.exists());
  });

  it('should have a body', () => {
    expect(component.find('.body')).toHaveLength(1);
  });

  it('should render a Matrix surrounded by LoadingBody', () => {
    const loadingBody = component.find(LoadingBody);

    expect(loadingBody.props().loadingState).toBe(matrixLoadingState);
    expect(loadingBody.find(MatrixContainer)).toHaveLength(1);
  });

  it('should call fetchMatrix on mount', () => {
    expect(mockFetchMatrix).toHaveBeenCalled();
  });
});
