import {shallow} from "enzyme";
import React from "react";
import {App} from "../../src/components/App";
import {Header} from "../../src/components/Header/Header";

describe('App', () => {
  const getComponent = () => (shallow(<App/>));
  it('should render', () => {
    const component = getComponent();

    expect(component.exists());
  });

  it('should have a header', () => {
    const component = getComponent();

    const header = component.find(<Header/>);

    expect(header.exists());
  });

  it('should have a body', () => {
    const component = getComponent();

    expect(component.find('.body')).toHaveLength(1);
  });
});
