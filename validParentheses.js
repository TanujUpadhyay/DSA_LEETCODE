//Valid Parentheses (LeetCode 20)

const validParentheses = (s) => {
  if (s.length == 0 || s.length == 1) return false;
  let stack = [];
  for (let char of s) {
    if (char == "(") stack.push(")");
    else if (char == "[") stack.push("]");
    else if (char == "{") stack.push("}");
    else if (stack.length == 0 || stack.pop() != char) return false;
  }

  return stack.length == 0 ? true : false;
};

console.log(validParentheses("()[]"));
console.log(validParentheses("()"));
console.log(validParentheses("([])"));
console.log(validParentheses("([]})"));
console.log(validParentheses("(){"));
console.log(validParentheses("("));
console.log(validParentheses(" "));
