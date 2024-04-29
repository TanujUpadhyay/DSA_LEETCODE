// 1.0 Two Sum
//[2,7,11,15] target 9
// 2+7 =9
// [0,1] index of the value

const twoSum = (num, target) => {
  let stroge = {};
  for (let [index, value] of num.entries()) {
    if (stroge[value] !== undefined) return [stroge[value], index];
    stroge[target - value] = index;
  }
};

console.log(twoSum([2, 7, 11, 15], 18));
