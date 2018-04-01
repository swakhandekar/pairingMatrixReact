import {shallow} from "enzyme";
import React from "react";
import {Header} from "../../../src/components/Header/Header";

describe('Header', () => {
  const getComponent = () => shallow(<Header/>);
  it('should exists', () => {
    const component = getComponent();

    expect(component.exists());
  });

  it('should have Pairing Matrix as text', () => {
    const component = getComponent();

    expect(component.text()).toBe("Pairing Matrix");
  });
});
