const lastWorldLength = (a) => {
  let lastWordLength = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] == " ") {
      if (lastWordLength > 0) break;
    } else {
      lastWordLength++;
    }
  }
  return lastWordLength;
};

console.log(
  lastWorldLength(
    " update First Call Interactions And AttackId And Also Update Target Total Machines"
  )
);
