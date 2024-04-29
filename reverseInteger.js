//7.0 Reverse Integer | Javascript

let noToChnage = 12345;
let num = 123456789;
// Function to reverse digits of num

// using string
const reverse = (number) => {
  if (number < 0) return -1 * reverse(-number);
  const solution = (number + "").split("").reverse().join("");
  return solution > 2 ** 31 ? 0 : solution;
};

console.log(reverse(num));

// using no
const reverseNo = (number) => {
  let reversed = 0;
  while (number !== 0) {
    const digit = number % 10; // Extract the last digit using modulo operator
    reversed = reversed * 10 + digit; // Build the reversed number
    number = Math.trunc(number / 10); // Remove the last digit from the original number
  }
  // Check for overflow
  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
    return 0;
  }
  return reversed;
};

// Test cases
console.log(reverseNo(123)); // Output: 321
console.log(reverseNo(-123)); // Output: -321
console.log(reverseNo(120)); // Output: 21

const reverseWithRec = (number, reversed = 0) => {
  // Base case: number becomes 0
  if (number === 0) {
    // Check for integer overflow
    if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
      return 0;
    }
    return reversed;
  }

  // Extract the last digit using modulo operator
  const digit = number % 10;

  // Build the reversed number
  const newReversed = reversed * 10 + digit;

  // Recursive call with the remaining part of the number
  return reverseWithRec(Math.trunc(number / 10), newReversed);
};

// Test cases
console.log(reverseWithRec(1534236469)); // Output: 321
console.log(reverseWithRec(-123)); // Output: -321
console.log(reverseWithRec(120)); // Output: 21
