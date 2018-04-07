const getCellCount = (i, j, pairs, users) => {
  if(users[i].ID > users[j].ID) {
    [i, j] = [j, i];
  }
  const matchedPairs = pairs.filter((pair) => (pair.UserOne === users[i].ID && pair.UserTwo === users[j].ID));
  if (matchedPairs.length !== 0) return matchedPairs[0].Count;
  return 0;
};

export const buildMatrix = (users, pairs) => {
  const data = [];
  for (let i = 0; i < users.length; i += 1) {
    const row = [];
    for (let j = 0; j <= i; j += 1) {
      row.push(getCellCount(i, j, pairs, users))
    }
    data.push(row);
  }
  return data;
};
