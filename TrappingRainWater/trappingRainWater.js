/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // Initialize two pointers, `left` and `right`, that start at the beginning and end of the `height` array
  let left = 0;
  let right = height.length - 1;

  // Initialize two variables, `maxLeft` and `maxRight`, that keep track of the maximum height from the left and right, respectively
  let maxLeft = height[left];
  let maxRight = height[right];

  // Initialize a variable, `result`, to keep track of the total amount of trapped water
  let result = 0;

  // Start a loop that continues until `left` is greater than or equal to `right`
  while (left < right) {
    // If the height of the bar pointed by `left` is less than or equal to the height of the bar pointed by `right`
    if (maxLeft <= maxRight) {
      // Increment `left`
      left++;
      // Update `maxLeft` with the maximum of its current value and the height of the bar pointed by `left`
      maxLeft = Math.max(maxLeft, height[left]);
      // Add the difference between `maxLeft` and the height of the bar pointed by `left` to `result`
      result += maxLeft - height[left];
    } else {
      // Decrement `right`
      right--;
      // Update `maxRight` with the maximum of its current value and the height of the bar pointed by `right`
      maxRight = Math.max(maxRight, height[right]);
      // Add the difference between `maxRight` and the height of the bar pointed by `right` to `result`
      result += maxRight - height[right];
    }
  }

  // Return the final value of `result`
  return result;
};

//Time Complexity O(n)
//Space complexity O(1)