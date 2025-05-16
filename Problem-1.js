class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  operate(type) {
    switch (type) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        return this.b !== 0 ? this.a / this.b : 'Cannot divide by zero';
      default:
        return 'Invalid operation';
    }
  }
}

// Example usage:
const calc = new Calculator(10, 5);
console.log(calc.operate('add'));       // Output: 15
console.log(calc.operate('subtract'));  // Output: 5
console.log(calc.operate('multiply'));  // Output: 50
console.log(calc.operate('divide'));    // Output: 2
