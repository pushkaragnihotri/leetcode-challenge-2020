// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
	const map = {}
	for (let char of magazine) {
		if (!map[char]) map[char] = 0
		map[char]++
	}

	for (let char of ransomNote) {
		if (!map[char]) return false
		map[char]--
	}
	return true
}

canConstruct('aa', 'aab')
