// 1249 minimum remove to make vaild parenthese

// const minRemoveToMakeVaild = (s) => {
//   const stack = [];
//   const indexMap = {};
//   let newString = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(") {
//       stack.push("(");
//     } else if (s[i] == ")") {
//       if (stack.length != 0) {
//         stack.pop();
//       } else {
//         indexMap[i] = ")";
//       }
//     }

//     if (!indexMap[i]) {
//       //   console.log(indexMap);
//       newString += s[i];
//     }
//   }

//   console.log(indexMap);
//   return newString;
// };
// const minRemoveToMakeVaild = (s) => {
//   const stack = [];
//   const indexMap = {};
//   let newString = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(") {
//       stack.push("(");
//     } else if (s[i] == ")") {
//       if (stack.length != 0) {
//         stack.pop();
//       } else {
//         indexMap[i] = ")";
//       }
//     }

//     if (!indexMap[i] && indexMap[0] != ")") {
//       newString += s[i];
//     }
//   }

//   return newString;
// };
const minRemoveToMakeVaild = (s) => {
  const stack = [];
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i);
    }
    if (s[i] == ")") {
      stack.push(j);
    }

    newString += s[i];
  }

  console.log(stack);
  console.log(stackIndex);
  return newString;
};

console.log(minRemoveToMakeVaild("lee(t(c)o)de)"));
console.log(minRemoveToMakeVaild("a)b(c)d"));
console.log(minRemoveToMakeVaild("))(("));
console.log(minRemoveToMakeVaild("a(b(c)"));
