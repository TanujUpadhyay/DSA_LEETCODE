// 394 Decode String | Google Interview

const decodeString = (s) => {
  let multiply = [];
  let tempMultiply = "";
  let repeatString = [];
  let solution = "";

  for (let char of s) {
    if (!isNaN(char)) {
      tempMultiply = `${tempMultiply}${char}`;
    } else if (char === "[") {
      multiply.push(tempMultiply);
      tempMultiply = "";
      repeatString.push(solution);
      solution = "";
    } else if (char === "]") {
      solution = repeatString.pop() + solution.repeat(multiply.pop());
    } else {
      solution += char;
    }
  }
  return solution;
};

console.log(decodeString("3[a2[i]2[bc3[cd]2[ef]]]"));
// console.log(decodeString("3[a2[i]]2[bc]"));
// console.log(decodeString("3[a]2[b]"));
