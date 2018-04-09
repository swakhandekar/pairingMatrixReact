import React from "react";
import {MatrixRow} from "../../../../src/components/Matrix/MatrixRow/MatrixRow";
import {shallow} from "enzyme";
import {MatrixCellContainer} from "../../../../src/components/Matrix/MatrixCell/MatrixCell";
import {UserCell} from "../../../../src/components/Matrix/UserCell/UserCell";

describe('MatrixRow', () => {
  const rowIndex = 5;
  const getComponent = () => shallow(<MatrixRow rowIndex={rowIndex}/>);

  it('should exists', () => {
    const component = getComponent();

    expect(component.exists());
  });

  it('should contain one UserCell and index number of MatrixCells', () => {
    const component = getComponent();

    expect(component.find(UserCell)).toHaveLength(1);
    expect(component.find(MatrixCellContainer)).toHaveLength(rowIndex);
  });
});
