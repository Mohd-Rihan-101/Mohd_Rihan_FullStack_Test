function customOddSeries(x) {
  let result = [];
  let limit = x % 2 === 0 ? x - 1 : x;
  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }
  console.log(result.join(', '));
}

// Example
customOddSeries(6);  // Output: 1, 3, 5
