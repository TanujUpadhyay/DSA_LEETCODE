// 5.0 Longest Palindromic Substring | Manacher Algorithm

const longestPalindromic = (s) => {
  const newString = getModifiedString(s);
  let p = new Array(newString.length).fill(0);

  let center = 0;
  let rightBoundary = 0;

  for (let i = 0; i < newString.length; i++) {
    let indexMirror = center - (i - center);
    if (i < rightBoundary) p[i] = Math.min(rightBoundary, p[indexMirror]);

    let right = i + (p[i] + 1);
    let left = i - (p[i] + 1);

    while (
      right < newString.length &&
      left >= 0 &&
      newString[left] == newString[right]
    ) {
      p[i]++;
      right++;
      left--;
    }
    if (i + p[i] > rightBoundary) {
      center = i;
      rightBoundary = i + p[i];
    }
  }
};
