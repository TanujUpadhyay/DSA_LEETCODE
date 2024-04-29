// 205 isIsomorphic string

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  let fisrtStringMap = {};
  let secondStringMap = {};
  for (let i = 0; i < s.length; i++) {
    if (!fisrtStringMap[s[i]]) fisrtStringMap[s[i]] = t[i];
    else if (fisrtStringMap[s[i]] !== t[i]) return false;

    if (!secondStringMap[t[i]]) secondStringMap[t[i]] = s[i];
    else if (secondStringMap[t[i]] !== s[i]) return false;
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("bad", "egg"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
