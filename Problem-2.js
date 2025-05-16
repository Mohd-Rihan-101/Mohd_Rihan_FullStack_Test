function printOddSeries(x) {
  let result = [];
  for (let i = 0; i < x; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(', '));
}

// Example
printOddSeries(4);  // Output: 1, 3, 5, 7
