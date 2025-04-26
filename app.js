alert("Welcome to Our Shop!");

let itemName = prompt("Enter the name of item you are buying:");
let itemPrice = parseInt(prompt("Enter the price of the item:"));
let quantity = parseInt(prompt("Enter the quantity you are purchasing:"));

let subTotal = itemPrice * quantity;

alert(`You are buying ${quantity} ${itemName}.Your subtotal is ${subTotal}`);
