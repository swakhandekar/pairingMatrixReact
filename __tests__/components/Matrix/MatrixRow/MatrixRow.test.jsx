import React from "react";
import {MatrixRow} from "../../../../src/components/Matrix/MatrixRow/MatrixRow";
import {shallow} from "enzyme";
import {MatrixCell} from "../../../../src/components/Matrix/MatrixCell/MatrixCell";

describe('MatrixRow', () => {
  const rowIndex = 5;
  const getComponent = () => shallow(<MatrixRow rowIndex={rowIndex}/>);

  it('should exists', () => {
    const component = getComponent();

    expect(component.exists());
  });

  it('should contain it\'s index plus one cells', () => {
    const component = getComponent();

    expect(component.find(MatrixCell)).toHaveLength(rowIndex + 1);
  });
});
