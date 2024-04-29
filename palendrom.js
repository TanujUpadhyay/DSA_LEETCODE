const isPalindrome = (number) => {
  if (number < 0) return false;
  const reverseWithRec = (number, reversed = 0) => {
    if (number === 0) {
      if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
        return 0;
      }
      return reversed;
    }

    const digit = number % 10;

    const newReversed = reversed * 10 + digit;

    return reverseWithRec(Math.trunc(number / 10), newReversed);
  };

  const reversed = reverseWithRec(number);
  if (reversed === number) return true;
  else return false;
};

console.log(isPalindrome(1534236469));
