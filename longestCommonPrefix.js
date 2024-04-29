// longest common prefix

const longestCommonPrefix = (strs) => {
  let output = "";
  strs.sort();
  let firstWord = strs[0];
  let lastWord = strs[strs.length - 1];

  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] != lastWord[i]) {
      break;
    }
    output += firstWord[i];
  }

  return output;
};

console.log(longestCommonPrefix(["flower", "floght", "flow"]));
