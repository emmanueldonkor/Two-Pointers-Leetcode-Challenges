/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  //using Two Pointers
  //Initialze the pointer
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[left]; //store initial value the left in temp
    s[left] = s[right]; //set the right to left
    s[right] = temp; //set right to temp

    left++;
    right--;
  }
};
//Time complexity O(n)
//Space complexity O(1)
