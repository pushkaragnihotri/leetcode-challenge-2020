// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

Example: Input: 16
Output: true

Example: Input: 14
Output: false

/**
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function (num) {
	for (let i = 0; i * i <= num; i++) {
		if (i * i === num) return true
	}
	return false
}
