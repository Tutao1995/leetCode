/* 
给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。

示例 1:

输入: ["abcd","dcba","lls","s","sssll"]
输出: [[0,1],[1,0],[3,2],[2,4]] 
解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
示例 2:

输入: ["bat","tab","cat"]
输出: [[0,1],[1,0]] 
解释: 可拼接成的回文串为 ["battab","tabbat"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


 */

/**
 * @param {string[]} words
 * @return {number[][]}
 */

//自己的   超出时间限制
var palindromePairs = function (words) {
  let ret = []
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let temp = `${words[i]}${words[j]}`
      let temp1 = `${words[j]}${words[i]}`
      if (isPalindrome(temp)) {
        ret.push([i, j])
      }
      if (isPalindrome(temp1)) {
        ret.push([j, i])
      }
    }
  }
  return ret
}

// 回文判断
const isPalindrome1 = (str) => {
  return str === str.split('').reverse().join('')
}

const isPalindrome2 = (str) => {
  let start = 0,
    end = str.length - 1
  while (start < end) {
    if (str[start] !== str[end]) return false
    end--
    start++
  }
  return true
}

const isPalindrome3 = (str) => {
  const len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] != str[len - i - 1]) return false
  }
  return true
}
