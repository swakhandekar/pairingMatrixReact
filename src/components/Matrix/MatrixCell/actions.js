export const CellActions = {
  INCREMENT_COUNT: "INCREMENT_COUNT"
};

export const incrementCount = (rowIndex, cellIndex) => ({type: CellActions.INCREMENT_COUNT, rowIndex, cellIndex});
