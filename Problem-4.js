function countMultiples(arr) {
  let result = {};

  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }

  for (let num of arr) {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) {
        result[i]++;
      }
    }
  }

  console.log(result);
}

// Example
countMultiples([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]);
// Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
