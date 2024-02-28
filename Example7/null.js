// variable is declared but has no value assigned to it
let x = null;
console.log(x); // Output: null

//a property of an object doesn't exist or is not applicable
const person = {
    name: 'Lak',
    age: null,
    gender: null
  };
  
  console.log(person.age); // Output: null (age property exists but has no value yet)
  console.log(person.address); // Output: undefined (address property doesn't exist)



  let shoppingCart = ['item1', 'item2', 'item3'];

  // User decides to remove all items from the cart
  shoppingCart = null; // Resetting to an intentionally empty state
  
  // Now you can check the state of the shopping cart
  if (shoppingCart === null) {
    console.log("Your shopping cart is empty.");
  } else {
    console.log("You have items in your shopping cart.");
  }
  





// null fore reset 
let value = 42;

// Some operations that make the value invalid
if (Math.random() < 0.5) {
  value = null; // Assign null to make it invalid
} else {
  value = 42; // Keep the original value (valid)
}

console.log(value); // Output: null or 42 (randomly either of these)

  