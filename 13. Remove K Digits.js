// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.

Example: Input: (num = '1432219'), (k = 3)
Output: '1219'
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example: Input: (num = '10200'), (k = 1)
Output: '200'
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example: Input: (num = '10'), (k = 2)
Output: '0'
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

Example: Input: (num = '9'), (k = 1)
Output: '0'
// Explanation: Remove the only existing digit from the number and it is left with nothing which is 0.

/******************************************* Solution *******************************************/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

var removeKdigits = function (num, k) {
	while (k > 0) {
		min = parseInt(num)
		for (let digit of num) {
			if (parseInt(num.replace(digit, '')) < min) {
				min = parseInt(num.replace(digit, ''))
			}
		}
		num = min + ''
		k--
	}
	return num
}

// Ps - this solution is not working for very large inputs. I'll be improvise my solution for it later.
