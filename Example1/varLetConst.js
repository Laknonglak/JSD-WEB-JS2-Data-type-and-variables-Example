//let
let y = 10;
if (true) {
    // let y = 20;  // New variable y is created
    console.log(y);  // Outputs 20
}
console.log(y);  // Outputs 10

//const
// const z = 10;
//       // z = 20;  // Error: Assignment to constant variable.
// let a = 70;
//     a = 50;
//     console.log(a);

//var
// var x = 10;
// if (true) {
//     var x = 20;  // x is updated
//     console.log(x);  // Outputs 20
// }
// console.log(x);  // Outputs 20


//---------------------------------------------Scope------------------------------------------------//

//var keyword has function scope or global scope, depending on where it's declared
//local
function exampleFunction() {
    var localVar = 'I am a local variable';
    console.log(localVar);
  }
  
  exampleFunction(); // Output: 'I am a local variable'
  console.log(localVar); // Output: Uncaught ReferenceError: localVar is not defined

//global
var globalVar = 'I am a global variable';

function exampleFunction() {
  console.log(globalVar); // Output: 'I am a global variable'
}

exampleFunction();
console.log(globalVar); // Output: 'I am a global variable'

//let
// Block-scoped variable declaration using let
let x = 10;
let name = 'John';
let isStudent = true;

console.log(x); // Output: 10
console.log(name); // Output: 'John'
console.log(isStudent); // Output: true


function exampleFunction() {
    if (true) {
      let localVar = 'I am a local variable';
      console.log(localVar); // Output: 'I am a local variable'
    }
    // console.log(localVar); // This line would result in an error because localVar is not accessible here
  }
  
  exampleFunction();

  let counter = 1;

if (true) {
  let counter = 2;
  console.log(counter); // Output: 2 (this refers to the inner variable)
}

console.log(counter); // Output: 1 (this refers to the outer variable)


//Block-Scoped
if (true) {
    const localVar = 'I am a constant';
    console.log(localVar); // Output: 'I am a constant'
  }
  
  // console.log(localVar); // This line would result in an error because localVar is not accessible here

