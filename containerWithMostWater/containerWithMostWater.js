/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //using two pointers
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    //Find the width between the highest and lowest
    const width = right - left;
    //Find the height by finding the minimum between the two pointers
    const heights = Math.min(height[left], height[right]);
    //Find the maximum area by finding the maximum between the initial max and the area of the container
    maxArea = Math.max(maxArea, width * heights);

    //Increment or decrement the pointer if the right is greater than left or left greater than right
    if (height[right] > height[left]) {
      left++;
    } else {
      right--;
    }
  }
  //Finally return the max area
  return maxArea;
};

//Time Complexity O(n)
//Space complexity O(1)