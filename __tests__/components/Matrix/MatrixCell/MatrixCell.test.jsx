import {shallow} from "enzyme";
import React from "react";
import {MatrixCell} from "../../../../src/components/Matrix/MatrixCell/MatrixCell";

describe('MatrixCell', () => {
  const value = 3;
  const mockIncrementCounter = jest.fn();
  const rowIndex = 5;
  const cellIndex = 9;

  const getComponent = () => shallow(
    <MatrixCell
      rowIndex={rowIndex}
      cellIndex={cellIndex}
      value={value}
      incrementCount={mockIncrementCounter}
    />);

  it('should exists', () => {
    const component = getComponent();

    expect(component.exists());
  });

  it('should render passed value', () => {
    const component = getComponent();

    expect(component.text()).toBe(value.toString());
  });

  it('should call incrementCount method on click, with row and cell indices', () => {
    const component = getComponent();
    component.simulate('click');

    expect(mockIncrementCounter).toHaveBeenCalledWith(rowIndex, cellIndex);
  });
});
