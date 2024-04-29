//200 Number of Islands | Javascript & Google Question

const grid = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1],
];

const transform = (rowInd, colInd, grid) => {
  if (
    grid[rowInd] == undefined ||
    grid[rowInd][colInd] == undefined ||
    grid[rowInd][colInd] == 0
  )
    return;
  grid[rowInd][colInd] = 0;
  transform(rowInd + 1, colInd, grid);
  transform(rowInd - 1, colInd, grid);
  transform(rowInd, colInd + 1, grid);
  transform(rowInd, colInd - 1, grid);
};

function countIslands(grid) {
  let countIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        countIslands++;
        transform(i, j, grid);
      }
    }
  }
  return countIslands;
}

console.log(countIslands(grid));
