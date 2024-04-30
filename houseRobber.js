// leetcode 198 : house robber problem

// const rob = (nums) => {
//   const memo = {};
//   const solve = (nums, i) => {
//     // console.log(i);
//     if (i >= nums.length) return 0;

//     if (memo[i]) return memo[i];

//     let steal = nums[i] + solve(nums, i + 2);
//     let skip = solve(nums, i + 1);

//     return (memo[i] = Math.max(steal, skip));
//   };

//   return solve(nums, 0);
// };

const rob = (nums) => {
  let n = nums.length;
  if (n == 1) return nums[0];
  const t = {};
  t[0] = 0;
  t[1] = nums[0];
  for (let i = 2; i <= n; i++) {
    let steal = nums[i - 1] + t[i - 2];
    let skip = t[i - 1];

    t[i] = Math.max(steal, skip);
  }

  return t[n];
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([0, 3, 2, 0]));
console.log(
  rob([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])
);
