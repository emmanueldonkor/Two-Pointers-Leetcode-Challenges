/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  // Two pointers approach
  let left = 0;
  let right = s.length - 1;

  // traverse the string from both ends until left pointer is less than right pointer
  while (left < right) {
    // check if the characters at left and right are not equal
    if (s[left] !== s[right]) {
      // return the result of checking if the string after skipping one of the characters is a palindrome
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    // increment the left pointer and decrement the right pointer
    left++;
    right--;
  }
  // return true if no mismatch is found in the string
  return true;
};

function isPalindrome(s, left, right) {
  // traverse the string from both ends until left pointer is less than right pointer
  while (left < right) {
    // check if the characters at left and right are not equal
    if (s[left] !== s[right]) {
      // return false if a mismatch is found
      return false;
    }
    // increment the left pointer and decrement the right pointer
    left++;
    right--;
  }
  // return true if no mismatch is found in the string
  return true;
}

//Time complexity O(n)
//Space Complexity O(1)
