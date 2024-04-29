// JavaScript program to count number of
// steps to reach a point

// Function to count number of steps
// required to reach a destination

// source -> source vertex
// step -> value of last step taken
// dest -> destination vertex
function steps(source, step, dest) {
  // base cases
  if (Math.abs(source) > dest) return Number.MAX_SAFE_INTEGER;
  if (source == dest) return step;

  // at each point we can go either way
  // if we go on positive side
  let pos = steps(source + step + 1, step + 1, dest);

  // if we go on negative side
  let neg = steps(source - step - 1, step + 1, dest);

  // minimum of both cases
  return Math.min(pos, neg);
}

// Driver code
let dest = 20;
console.log(
  "No. of steps required to reach " + dest + " is " + steps(10, 5, dest)
);
