import React from "react";
import {LoadingBody} from "../../../../src/components/utils/LoadingBody/LoadingBody";
import {LoadingState} from "../../../../src/components/utils/enums";
import {shallow} from "enzyme";

const DummyComponent = () => (<div className="dummy"/>);

describe('LoadingBody', () => {
  let loadingState = LoadingState.LOADING;
  const getComponent = () => shallow(<LoadingBody loadingState={loadingState}><DummyComponent/></LoadingBody>);

  it('should render Loading when loading state is LOADING', () => {
    loadingState = LoadingState.LOADING;
    const component = getComponent();

    expect(component.text()).toBe("Loading...");
  });

  it('should render Failed when loading state is FAILED', () => {
    loadingState = LoadingState.FAILED;
    const component = getComponent();

    expect(component.text()).toBe("Failed Loading");
  });

  it('should render its children when loading state is FINISHED', () => {
    loadingState = LoadingState.FINISHED;
    const component = getComponent();

    expect(component.find(DummyComponent)).toHaveLength(1);
  });
});
