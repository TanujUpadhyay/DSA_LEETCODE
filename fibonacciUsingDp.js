// fibonacci number using dp

const fib = (n) => {
  const storage = {};
  const fn = (n) => {
    if (n <= 1) return n;
    if (storage[n]) return storage[n];
    storage[n] = fn(n - 1) + fn(n - 2);
    return storage[n];
  };

  return fn(n);
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(5));
console.log(fib(7));
console.log(fib(30));
console.log(fib(100));
