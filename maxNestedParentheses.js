// 1614 max nesting depth of the parentheses

const maxDepth = (s) => {
  let depth = 0,
    open = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") ++open;
    else if (s[i] == ")") --open;

    depth = Math.max(depth, open);
  }

  return depth;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("(1)+((2))+((((3))))"));
console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // Output: 3
console.log(maxDepth("((()))")); // Output: 3
console.log(maxDepth("((()))()")); // Output: 3
console.log(maxDepth("((()()))")); // Output: 4
console.log(maxDepth("()()()")); // Output: 1
console.log(maxDepth("(()())")); // Output: 2
console.log(maxDepth("()(()())")); // Output: 2
console.log(maxDepth("()(()())(((())))")); // Output: 4
console.log(maxDepth("(()())((((()))))")); // Output: 6
console.log(maxDepth("()()(()(()))")); // Output: 3
console.log(maxDepth("()()(()(((()))()))")); // Output: 4
