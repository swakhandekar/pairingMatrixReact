import {shallow} from "enzyme";
import {MyCard} from "../../../../src/components/utils/MyCard/MyCard";
import React from "react";

const DummyComponent = () => (<div/>);

describe('MyCard', () => {
  const getComponent = () => shallow(<MyCard><DummyComponent/></MyCard>);

  it('should exists', () => {
    const component = getComponent();

    expect(component.exists());
  });

  it('should render it\'s children inside my-card-body', () => {
    const component = getComponent();

    const cardBody = component.find('.my-card-body');

    expect(cardBody.find(DummyComponent)).toHaveLength(1);
  });

});
