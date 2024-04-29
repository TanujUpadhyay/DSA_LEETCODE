// 22.0 Generate Parentheses | Javascript & Top HedgeFund

const generateParentheses = (number) => {
  let allParentheses = [];

  const generateCombos = (leftPcount, rightPCount, partern) => {
    if (leftPcount > rightPCount) return;
    if (!leftPcount && !rightPCount) {
      allParentheses.push(partern);
    }

    if (leftPcount > 0)
      generateCombos(leftPcount - 1, rightPCount, partern + "(");
    if (rightPCount > 0)
      generateCombos(leftPcount, rightPCount - 1, partern + ")");
  };

  generateCombos(number, number, "");
  return allParentheses;
};

console.log(generateParentheses(3));
console.log(generateParentheses(1));
