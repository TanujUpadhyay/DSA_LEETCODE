//13 roman to integer

const romanToInteger = (s) => {
  let romanValueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let solutin = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanValueMap[s[i]]) {
      if (romanValueMap[s[i]] < romanValueMap[s[i + 1]]) {
        solutin += romanValueMap[s[i + 1]] - romanValueMap[s[i]];
        i++;
      } else {
        solutin += romanValueMap[s[i]];
      }
    }
  }
  return solutin;
};

console.log(romanToInteger("III"));
console.log(romanToInteger("LVIII"));
console.log(romanToInteger("MCMXCIV"));
