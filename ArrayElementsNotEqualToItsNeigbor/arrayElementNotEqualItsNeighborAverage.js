/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    //Greedy algorithm with two pointers
   nums.sort((a, b) => a - b);
    let n = nums.length;
    let ans = [];
    let left = 0, let right = n - 1;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            ans[i] = nums[left++];
        } else {
            ans[i] = nums[right--];
        }
    }
    return ans;
};