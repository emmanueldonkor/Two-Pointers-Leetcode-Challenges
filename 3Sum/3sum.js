/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //using two pointers
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    //using two pointers check sum
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++; // if current num on the left equal to the second num on the left increase the left pointer
        while (nums[right] === nums[right - 1]) right--; // if current num on the right equal to the second num on the right decrease the left pointer
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
//Time complexity O(n*n)
//Space complexity O(n)