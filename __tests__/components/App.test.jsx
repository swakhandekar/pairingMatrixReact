import {shallow} from "enzyme";
import React from "react";
import {App} from "../../src/components/App";
import {Header} from "../../src/components/Header/Header";
import {MatrixContainer} from "../../src/components/Matrix/Matrix";

describe('App', () => {
  const getComponent = () => (shallow(<App/>));
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

  it('should render a Matrix', () => {
    expect(component.find(MatrixContainer)).toHaveLength(1);
  });
});
