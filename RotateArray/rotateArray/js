/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //using two pointers
    k = k % nums.length
    //using reversing method
    reverse(nums,0, nums.length-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, nums.length-1)
    
};


var reverse = function(nums, start, end){
    while(start < end){
        //Swap start and end
        [nums[start], nums[end]] = [nums[end] ,nums[start]]
        start++
        end--
    }
}

//Time complexity O(n)
//Space complexity O(1)


