// climbing stairs || leetcode 70

// using top down approach
const climbStairs = (n) => {
  const storage = {};
  const solve = (n) => {
    if (n < 0) return 0;

    if (storage[n]) return storage[n];

    if (n === 0) return 1;

    return (storage[n] = solve(n - 1) + solve(n - 2));
  };

  return solve(n);
};
console.log(climbStairs(3));
console.log(climbStairs(5));
console.log(climbStairs(45));

// using bottom up approach

const climbStairsUsingBottomUp = (n) => {
  if (n == 1 || n === 2) return n;
  let a = 1,
    b = 2,
    c = 3;

  for (let i = 3; i <= n; i++) {
    c = a + b;
    let temp = b;
    b = c;
    a = temp;
  }

  return c;
};
console.log(climbStairsUsingBottomUp(3));
console.log(climbStairsUsingBottomUp(45));
