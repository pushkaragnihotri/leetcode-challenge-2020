// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

Example: Input: s: 'cbaebabacd'
p: 'abc'

Output: [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

Example: Input: s: 'abab'
p: 'ab'

Output: [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
	let hash = {},
		uniqueChars = 0
	for (let c of p) {
		if (hash[c] == null) {
			uniqueChars++
			hash[c] = 1
		} else {
			hash[c]++
		}
	}

	let res = []
	let left = 0,
		right = 0
	for (right; right < s.length; right++) {
		if (hash[s[right]] != null) hash[s[right]]--
		if (hash[s[right]] == 0) uniqueChars--
		if (uniqueChars == 0) res.push(left)
		if (right - left + 1 == p.length) {
			if (hash[s[left]] != null) hash[s[left]]++
			if (hash[s[left++]] == 1) uniqueChars++
		}
	}
	return res
}
