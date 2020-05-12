// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

Example: Input: [1, 1, 2, 3, 3, 4, 4, 8, 8]
Output: 2

Example: Input: [3, 3, 7, 7, 10, 11, 11]
Output: 10

// Note: Your solution should run in O(log n) time and O(1) space.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity: n/2
var singleNonDuplicate = function (nums) {
	for (let i = 0; i < nums.length; i = i + 2) {
		if (nums[i] !== nums[i + 1]) {
			return nums[i]
		}
	}
}

// Time Complexity: log(n)
var singleNonDuplicate = function (nums) {
	if (nums.length === 1) return nums[0]
	return bsa(0, nums.length - 1)
	function bsa(start, end) {
		let mid = Math.floor((start + end) / 2)
		if (nums[mid] === nums[mid - 1]) return mid % 2 ? bsa(mid + 1, end) : bsa(start, mid)
		if (nums[mid] === nums[mid + 1]) return mid % 2 ? bsa(start, mid - 1) : bsa(mid, end)
		return nums[mid]
	}
}
