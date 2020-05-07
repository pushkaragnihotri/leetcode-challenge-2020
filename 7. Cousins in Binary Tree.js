// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

Example: Input: (root = [1, 2, 3, 4]), (x = 4), (y = 3)
Output: false

Example: Input: (root = [1, 2, 3, null, 4, null, 5]), (x = 5), (y = 4)
Output: true

Example: Input: (root = [1, 2, 3, null, 4]), (x = 2), (y = 3)
Output: false

// Note:
// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

var isCousins = function (root, x, y) {
	function getDepthAndParent(node, n, depth = 0, parent) {
		if (!node) return null
		if (node.val === n) {
			return { depth, parent }
		}
		let left = getDepthAndParent(node.left, n, depth + 1, node)
		let right = getDepthAndParent(node.right, n, depth + 1, node)
		return left || right
	}
	let { depth: xDepth, parent: xParent } = getDepthAndParent(root, x)
	let { depth: yDepth, parent: yParent } = getDepthAndParent(root, y)

	return xDepth === yDepth && xParent !== yParent
}

root = [1, 2, 3, 4]
x = 4
y = 3

root = [1, 2, 3, null, 4, null, 5]
x = 5
y = 4

root = [1, 2, 3, null, 4]
x = 2
y = 3

console.log(isCousins(root, x, y))
