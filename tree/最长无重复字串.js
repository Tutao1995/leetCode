const lengthOfLongestSubstring = function (s) {
    let i = 0,
        j = 0,
        len = s.length,
        sLen = 0;
    let _map = new Map();
    while (i < len && j < len) {
        if (!_map.has(s[j])) {
            _map.set(s[j], true);
            j++;
            sLen = Math.max(sLen, j - i);
        } else {
            _map.delete(s[i]);
            i++;
        }
    }
    return sLen;
};

const s = "abcabcbb";

console.log(lengthOfLongestSubstring(s));
