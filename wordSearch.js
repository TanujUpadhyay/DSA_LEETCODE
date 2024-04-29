// 79 word search

const exist = (board, word) => {
  const checker = (row, col, index) => {
    if (index === word.length) return true;

    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = "#";

    const found =
      checker(row + 1, col, index + 1) ||
      checker(row - 1, col, index + 1) ||
      checker(row, col + 1, index + 1) ||
      checker(row, col - 1, index + 1);

    board[row][col] = temp;

    return found;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (checker(i, j, 0)) return true;
    }
  }

  return false;
};

// Example usage:
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); // Output: true

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
); // Output: true

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
); // Output: false
