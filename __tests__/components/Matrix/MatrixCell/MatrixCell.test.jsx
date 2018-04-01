import {shallow} from "enzyme";
import React from "react";
import {MatrixCell} from "../../../../src/components/Matrix/MatrixCell/MatrixCell";

describe('MatrixCell', () => {
  const getComponent = () => shallow(<MatrixCell/>);

  it('should exists', () => {
    const component = getComponent();

    expect(component.exists());
  });
});
