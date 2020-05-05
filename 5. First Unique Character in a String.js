// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */

/* using hashmap */

// Time : 72ms
var firstUniqChar = function (s) {
	let cache = new Map()
	for (let c of s) {
		cache.has(c) ? cache.set(c, cache.get(c) + 1) : cache.set(c, 1)
	}
	for (let [key, val] of cache) {
		if (val === 1) return s.indexOf(key)
	}
	return -1
}

// Time : 92ms
var firstUniqChar = function (s) {
	let cache = new Map()
	for (let c of s) {
		cache.has(c) ? cache.set(c, cache.get(c) + 1) : cache.set(c, 1)
	}
	for (let i = 0; i < s.length; i++) {
		if (cache.get(s[i]) === 1) return i
	}
	return -1
}

/* using object */

// Time : 80ms
var firstUniqChar = function (s) {
	let map = {}
	for (let char of s) {
		map[char] ? map[char]++ : (map[char] = 1)
	}
	for (let i = 0; i < s.length; i++) {
		if (map[s[i]] === 1) return i
	}
	return -1
}

var firstUniqChar = function (s) {
	for (i = 0; i < s.length; i++) if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
	return -1
}

s = 'leetcode'
s = 'loveleetcode'

console.log(firstUniqChar(s))
