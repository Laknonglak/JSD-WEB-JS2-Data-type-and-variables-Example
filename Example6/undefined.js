//variable is declared but not assigned a value
let x;
console.log(x); // Output: undefined

//accessing an object property that doesn't exist
const person = {
    name: 'Alice',
    age: 30
  };
  
  console.log(person.gender); // Output: undefined (the property "gender" doesn't exist)

  //a function doesn't have a return statement
  function greet() {
    console.log('Hello!');
  }
  
  const result = greet();
  console.log(result); // Output: undefined

  //a function parameter is not provided with an argument
  function greet(name) {
    console.log('Hello, ' + name);
  }
  
  greet(); // Output: 'Hello, undefined' (name parameter is not provided)
  

  //an array element doesn't exist
  const arr = [1, 2, 3];

  console.log(arr[5]); // Output: undefined (index 5 doesn't exist in the array)

  //you can check undefined
  let a;
if (typeof a === 'undefined') {
  console.log('a is undefined');
}


  
