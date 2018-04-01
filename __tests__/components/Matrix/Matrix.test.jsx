import {shallow} from "enzyme";
import React from "react";
import {Matrix} from "../../../src/components/Matrix/Matrix";
import {MatrixRow} from "../../../src/components/Matrix/MatrixRow/MatrixRow";

describe('Matrix', () => {
  const n = 4;
  const getComponent = () => (shallow(<Matrix length={n}/>));
  it('should exists', () => {
    const component = getComponent();

    expect(component.exists());
  });

  it('should contain n rows', () => {
    const component = getComponent();

    expect(component.find(MatrixRow)).toHaveLength(n);
  });
});
