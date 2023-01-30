/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  //Two Pointers
  const pattern = /[^a-z0-9]/g;
  s = s.toLowerCase().replace(pattern, "");
  let left = 0;
  let right = s.length - 1;
  //Check if left string is not equal to right and return false
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  //If all check is done and  it's pallindrome, return true
  return true;
};

//space complexity O(n)
//Time complexity O(n)
