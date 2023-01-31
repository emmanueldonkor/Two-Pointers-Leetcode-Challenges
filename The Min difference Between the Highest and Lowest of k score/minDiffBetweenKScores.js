/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  //We need to sort the array in ascending order
  nums = nums.sort((a, b) => a - b);
  //using two pointers
  let left = 0;
  let right = k - 1;
  let minimum = Number.MAX_VALUE;
  while (right < nums.length) {
    let curMin = nums[right] - nums[left];
    minimum = Math.min(minimum, curMin);
    //increment both pointers
    left++;
    right++;
  }
  return minimum;
};
