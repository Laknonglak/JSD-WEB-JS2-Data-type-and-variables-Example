// post-increament (i++) - assign before add
let num = 0;
let a1 = num++; //assign a1 = num then num = num+1
console.log(a1);
console.log(num);

// pre-increament (++i) - add then assign
let num1 = 0;
let b1 = ++num1; // num1 = num1+1 then assing b1 = num1
console.log(b1);
console.log(num1);


let i = 0;
while (i < 5) {
  console.log(i++);
}

let j = 0;
while (j < 5) {
  console.log(++j);
}



// Pre-increment //
// --> If you need the variable to be incremented first and then used in an operation, use pre-increment.

// Loop Control: When you want to increment a loop variable before using it as a condition.
for (let i = 0; i < 5; ++i) {
    console.log(i); // i is incremented before being used in the loop body
}
// Output: 0, 1, 2, 3, 4

// Accumulation: When you want to accumulate a value while iterating and need the updated value for each iteration.
let sum = 0;
for (let i = 1; i <= 5; ++i) {
    sum += i; // Increment 'sum' with the updated 'i' value in each iteration
}
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)