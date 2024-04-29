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

const fibUsingLoop = (n) => {
  if (n <= 1) return n;
  let a = 0,
    b = 1,
    c = 0;
  for (let i = 1; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(5));
console.log(fib(7));
console.log(fib(30));
console.log(fibUsingLoop(100));
console.log(fibUsingLoop(0));
console.log(fibUsingLoop(1));
