/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  //trying to use two pointers
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    //add the left and the right pointer
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1]; //return the array if we find the target
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return []; //if nothing return empty array
};

//Time complexity of O(n)
//Space complexity of O(1)
