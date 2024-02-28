// //Array
// const jsd = ["James","Kan","Mean","Lak","Folk","Wee"];
// console.log (jsd);  

// //Access Array
// const jsd = ["James","Kan","Mean","Lak","Folk","Wee"];
// console.log (jsd[6]);  


// //Dynamic change lenth
// const jsd = ["James","Kan","Mean","Lak","Folk","Wee"];
// jsd.push("Ne");
// console.log(jsd); 

//Dynamic Change Data Type
const jsd = ["James","Kan","Mean","Lak","Folk","Wee","Ne"];
jsd.push(15);
jsd.push("💞");
console.log(jsd);


// Define an array to hold the items in the shopping cart
let shoppingCart = [];

// Function to add an item to the cart
function addItemToCart(item) {
  shoppingCart.push(item);
  console.log(`Item added: ${item}`);
}

// Example items
const item1 = 'JavaScript Book';
const item2 = 'Coffee Mug';

// Add items to the cart
addItemToCart(item1);
addItemToCart(item2);


// // Define an array to hold the items in the shopping cart
// let shoppingCart = [];

// // Function to add an item to the cart
// function addItemToCart(item) {
//   shoppingCart.push(item);
//   console.log(`Item added: ${item.name} ${item.price}`);
// }

// // Example items
// const item1 = { name: 'JavaScript Book', price: 29.99 };
// const item2 = { name: 'Coffee Mug', price: 9.99 };

// // Add items to the cart
// addItemToCart(item1);
// addItemToCart(item2);