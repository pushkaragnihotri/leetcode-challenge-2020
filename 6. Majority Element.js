// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

Example: Input: [3, 2, 3]
Output: 3

Example: Input: [2, 2, 1, 1, 1, 2, 2]
Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 68 ms, faster than 42.81% of JavaScript online submissions for Majority Element.
// Memory Usage: 37.8 MB, less than 28.57% of JavaScript online submissions for Majority Element.

var majorityElement = function (nums) {
	let map = new Map()
	for (let n of nums) {
		map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1)
	}
	for (let [key, val] of map) {
		if (val > Math.floor(nums.length / 2)) return key
	}
}

nums = [3, 2, 3]
nums = [2, 2, 1, 1, 1, 2, 2]
nums = [6, 5, 5]
console.log(majorityElement(nums))

/* Found this solution in the discussion, not very efficient though but I liked the approach */

// var majorityElement = function (nums) {
// 	// sort the array and the middle is the majority
// 	nums.sort((a, b) => a - b)
// 	return nums[Math.floor(nums.length / 2)]
// }
