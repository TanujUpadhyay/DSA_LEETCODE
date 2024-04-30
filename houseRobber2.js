// leetcode 213 : house robber problem 2

const rob = (nums) => {
  let memo = {};
  const solve = (nums, i, n) => {
    // console.log(i);
    if (i >= n) return 0;

    if (memo[i]) return memo[i];

    let steal = nums[i] + solve(nums, i + 2, n);
    let skip = solve(nums, i + 1, n);

    return (memo[i] = Math.max(steal, skip));
  };

  const n = nums.length;

  if (n == 1) return nums[0];
  if (n == 2) return Math.max(nums[0], nums[1]);
  if (nums.every((num) => num === 0)) return 0;

  //case 12 take 0 house
  let zeroHouse = solve(nums, 0, n - 1);
  memo = {};
  let firstHouse = solve(nums, 1, n);

  return Math.max(zeroHouse, firstHouse);
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
