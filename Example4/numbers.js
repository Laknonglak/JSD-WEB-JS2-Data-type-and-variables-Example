const integerNumber = 42; // An example of an integer number
const floatingPointNumber = 3.14; // An example of a floating-point number
const scientificNotation = 5.2e3; // Scientific notation: 5.2 * 10^3 = 5200


const a = 10;
const b = 5;
const c = 7;

console.log(a + b + c); // Output: 15
console.log(a - b - c); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2

console.log(Math.sqrt(25)); // Output: 5 (square root)
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)
console.log(Math.PI); // Output: 3.141592653589793 (value of π)

const min = 1;
const max = 10;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt); // Output: A random integer between 1 and 10 (inclusive)


//order of Math operation BODMAS
/*
  Brackets or Parentheses ()
  Orders (**)
  Division /
  Multiplication *
  Addition +
  Subtraction - 
*/

// Example 1
const result1 = 2 + 3 * 4;
console.log(result1); // Output: 14 (3 * 4 = 12, then 2 + 12 = 14)

// Example 2
const result2 = (2 + 3) * 4;
console.log(result2); // Output: 20 (2 + 3 = 5, then 5 * 4 = 20)

// Example 3
const result3 = 10 - 2 ** 3;
console.log(result3); // Output: 2 (2 ** 3 = 8, then 10 - 8 = 2)

// Example 4
const result4 = 10 % 3 + 2 * 5;
console.log(result4); // Output: 12 (10 % 3 = 1, then 2 * 5 = 10, then 1 + 10 = 12)



