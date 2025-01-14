// define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana","orange"];

// test for equality and inequality with strings

console.log("Is apple is equals to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equals to apple?");
console.log(apple != "apple");

// tests using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

console.log("\nIs ten is equals to twenty?");
console.log(ten == twenty);

// not equal to
console.log("\nIs ten is not equals to twenty?");
console.log(ten != twenty);

// greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10); 

// greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5); 

// less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10); 

// tests using "and" & "or" operaters
console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty < 10 ); 

console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty < 30 ); 

// using || (or)
console.log("\n twenty is greater than 50 or 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);

console.log("\n twenty is greater than 50 OR 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);

// test whether an item is included in an array
console.log("Is orange included in my fruits array?")
console.log(fruits.includes("orange"));

console.log("Is orange not included in my fruits array?")
console.log(!fruits.includes("orange"));


