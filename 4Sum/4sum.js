/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);
  let result = [];
  let n = nums.length;

  // Loop through the first two numbers
  for (let i = 0; i < n - 3; i++) {
    // Skip duplicates for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicates for the second number
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let l = j + 1;
      let r = n - 1;
      // Use two pointers to find the other two numbers
      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          // Skip duplicates for the third and fourth numbers
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }

  return result;
};

//Time complexity O(n^3)
//Space complexity O(n)
