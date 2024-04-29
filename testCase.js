// Test Case 1
const grid1 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
// Expected output: 3

// Test Case 2
const grid2 = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
];
// Expected output: 3

// Test Case 3
const grid3 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1],
];
// Expected output: 1

// Test Case 4 (Empty grid)
const grid4 = [];
// Expected output: 0

// Test Case 5 (Grid with only water)
const grid5 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
// Expected output: 0

// Test Case 6 (Grid with only one cell of land)
const grid6 = [[1]];
// Expected output: 1

// Test Case 7 (Grid with diagonal islands)
const grid7 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
// Expected output: 3

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

console.log(countIslands(grid1));
console.log(countIslands(grid2));
console.log(countIslands(grid3));
console.log(countIslands(grid4));
console.log(countIslands(grid5));
console.log(countIslands(grid6));
console.log(countIslands(grid7));
