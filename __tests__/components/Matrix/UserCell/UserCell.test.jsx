import {shallow} from "enzyme";
import React from "react";
import {UserCell} from "../../../../src/components/Matrix/UserCell/UserCell";

describe('UserCell', () => {
  const name = "testUser";
  const getComponent = () => (shallow(<UserCell name={name}/>));

  it('should exists', () => {
    const component = getComponent();

    expect(component.exists());
  });

  it('should display name of user as passed', () => {
    const component = getComponent();

    expect(component.text()).toBe(name);
  });
});
