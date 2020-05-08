// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example: Input: coordinates = [
	[1, 2],
	[2, 3],
	[3, 4],
	[4, 5],
	[5, 6],
	[6, 7],
]
Output: true

Example: Input: coordinates = [
	[1, 1],
	[2, 2],
	[3, 4],
	[4, 5],
	[5, 6],
	[7, 7],
]
Output: false

// Constraints:
// 1. 2 <= coordinates.length <= 1000
// 2. coordinates[i].length == 2
// 3. -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// 4. coordinates contains no duplicate point.

// Hints:
// 1. If there're only 2 points, return true.
// 2. Check if all other points lie on the line defined by the first 2 points.
// 3. Use cross product to check collinearity.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

var checkStraightLine = function (coordinates) {
	let a = coordinates
	if (a.length < 2) return false
	if (a.length === 2) return true

	let slope = (a[1][1] - a[0][1]) / (a[1][0] - a[0][0])

	for (let i = 2; i < a.length; i++) {
		if ((a[i][1] - a[0][1]) / (a[i][0] - a[0][0]) !== slope) return false
	}
	return true
}

// Results:
// Runtime: 108 ms, faster than 9.62% of JavaScript online submissions for Check If It Is a Straight Line.
// Memory Usage: 39.5 MB, less than 100.00% of JavaScript online submissions for Check If It Is a Straight Line.

const ifCollinear = (x, y, z) => {
	return (z[1] - y[1]) * (y[0] - x[0]) === (y[1] - x[1]) * (z[0] - y[0])
}

var checkStraightLine = function (coordinates) {
	let a = coordinates
	if (a.length < 2) return false
	if (a.length === 2) return true

	for (let i = 1; i < a.length - 1; i++) {
		if (!ifCollinear(a[i - 1], a[i], a[i + 1])) return false
	}
	return true
}

// Results:
// 66 / 66 test cases passed.
// Status: Accepted
// Runtime: 56 ms, Your runtime beats 62.18 % of javascript submissions
// Memory Usage: 34.4 MB
