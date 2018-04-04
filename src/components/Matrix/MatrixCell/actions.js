export const CELL_ACTIONS = {
  INCREMENT_COUNT: "INCREMENT_COUNT"
};

export const incrementCount = (rowIndex, cellIndex) => ({type: CELL_ACTIONS.INCREMENT_COUNT, rowIndex, cellIndex});
