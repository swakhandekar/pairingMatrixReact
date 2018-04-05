import React from "react";
import {LoadingBody} from "../../../../src/components/utils/LoadingBody/LoadingBody";
import {LOADING_STATE} from "../../../../src/components/utils/enums";
import {shallow} from "enzyme";

const DummyComponent = () => (<div className="dummy"/>);

describe('LoadingBody', () => {
  let loadingState = LOADING_STATE.LOADING;
  const getComponent = () => shallow(<LoadingBody loadingState={loadingState}><DummyComponent/></LoadingBody>);

  it('should render Loading when loading state is LOADING', () => {
    loadingState = LOADING_STATE.LOADING;
    const component = getComponent();

    expect(component.text()).toBe("Loading...");
  });

  it('should render Failed when loading state is FAILED', () => {
    loadingState = LOADING_STATE.FAILED;
    const component = getComponent();

    expect(component.text()).toBe("Failed Loading");
  });

  it('should render its children when loading state is FINISHED', () => {
    loadingState = LOADING_STATE.FINISHED;
    const component = getComponent();

    expect(component.find(DummyComponent)).toHaveLength(1);
  });
});
