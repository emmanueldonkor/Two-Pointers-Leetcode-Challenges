/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //using two pointers
  let left = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[left] !== nums[i]) {
      left++;
      nums[left] = nums[i];
    }
  }
  return left + 1;
};
