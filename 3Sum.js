//15 3Sum | Google Interview

const threeSum = (nums) => {
  let solution = [],
    left = 0,
    right = nums.length - 1;

  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);

  for (let [index, number] of nums.entries()) {
    if (number > 0) return solution;
    if (number === nums[index - 1]) continue;

    left = index + 1;
    right = nums.length - 1;
    let temp = 0;

    while (left < right) {
      temp = number + nums[left] + nums[right];
      if (temp === 0) {
        solution.push([number, nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (temp > 0) {
        right--;
      } else if (temp < 0) {
        left++;
      }
    }
  }

  return solution;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
