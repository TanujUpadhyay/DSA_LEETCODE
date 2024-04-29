// 1544. Make The String Great

const makeGood = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const prevChar = stack[stack.length - 1];

    if (
      prevChar &&
      Math.abs(char.charCodeAt(0) - prevChar.charCodeAt(0)) === 32
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

// Example usage:
console.log(makeGood("leEeetcode")); // Output: "leetcode"
console.log(makeGood("abBAcC")); // Output: ""
console.log(makeGood("Pp")); // Output: "Pp"
