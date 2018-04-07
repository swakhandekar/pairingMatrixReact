import {buildMatrix} from "../../../src/services/matrixServices/matrixBuilder";

describe('matrixBuilder', () => {
  const pairs = [
    {UserOne: 21, UserTwo: 23, Count: 4},
    {UserOne: 9, UserTwo: 76, Count: 2},
    {UserOne: 9, UserTwo: 23, Count: 6},
  ];
  const users = [
    {ID: 23}, {ID: 21},
    {ID: 76}, {ID: 9}
  ];

  it('should return built matrix properly', () => {
    const builtMatrix = buildMatrix(users, pairs);

    expect(builtMatrix).toEqual([
      [0],
      [4, 0],
      [0, 0, 0],
      [6, 0, 2, 0]
    ])
  });
});
