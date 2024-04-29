//26. Remove Duplicates from Sorted Array

const removeDuplicates = (nums) => {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[count] = nums[i];
      count += 1;
    }
  }
  //   console.log(nums);
  return count;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
