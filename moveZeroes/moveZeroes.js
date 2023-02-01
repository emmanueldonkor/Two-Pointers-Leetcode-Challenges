/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // Initialize the pointer that will keep track of the position where we should insert the next non-zero element
  let insertPos = 0;

  // Iterate through the array and move the non-zero elements to the front of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos += 1;
    }
  }

  // Insert the zeros at the end of the array
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

//Alternative  method
function moveZeroes(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
  }
}


//Time complexity of O(n)
//Space complexity Of O(1)