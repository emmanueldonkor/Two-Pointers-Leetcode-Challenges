/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let mergedIndex = m + n - 1;

  while (index2 >= 0) {
    if (index1 >= 0 && nums1[index1] > nums2[index2]) {
      nums1[mergedIndex] = nums1[index1];
      index1--;
    } else {
      nums1[mergedIndex] = nums2[index2];
      index2--;
    }
    mergedIndex--;
  }
};

//Time Complexity O(m + n),
//space complexity O(1)

/* Explanation

Initialize three pointers: index1, index2, and mergedIndex.
index1 points to the last element of nums1 that should be considered in the merge.
index2 points to the last element of nums2 that should be considered in the merge.
mergedIndex points to the last element of the nums1 array where the result of the merge should be stored.
Compare the element at index1 and index2 and add the smaller one to nums1[mergedIndex].
If index1 >= 0 and nums1[index1] > nums2[index2], then nums1[index1] is the smaller one and should be added to nums1[mergedIndex]. In this case, decrement index1 by 1.
If index1 < 0 or nums1[index1] <= nums2[index2], then nums2[index2] is the smaller one and should be added to nums1[mergedIndex]. In this case, decrement index2 by 1.
Repeat step 2 until index2 becomes negative. This means that all elements from nums2 have been added to nums1.

The final result is stored in nums1, and the merged array is sorted in non-decreasing order. */
