/**
 * Declare the variables "a" and "b" to be two numbers
 * "a" should be 8
 * "b" should be 3
 * "a" should always be on the left side of an equation
 *
 * 1. Add them together in a variable named "sum"
 * 2. Subtract them in a variable named "difference"
 * 3. Multiply them in a variable named "product"
 * 4. Divide them in a variable named "quotient"
 */

// Define "a" below
let a = 8;
// Define "b" below
let b = 3;

let sum = a + b;
console.log('sum:', sum); // 11

let difference = a - b;
console.log('difference:', difference); // 5

let product = a * b;
console.log('product:', product); // 24

let quotient = a / b
console.log('quotient:', quotient); // 2.66 (etc)

console.log('\n===\n'); // Don't mind these things


/**
 * Reassign "a" and "b" to numbers of your choice with two decimal values
 * Reassign "sum", "difference", "product", and "quotient"
 *
 * Example: 15.34
 */

// Reassign "a" below
 a = 1.50
// Reassign "b" below
 b = 2.50

// Reassign "sum" below
sum = a + b
console.log('sum:', sum);

// Reassign "difference" below
difference = a - b
console.log('difference:', difference);

// Reassign "product" below
product = a * b
console.log('product:', product);

// Reassign "quotient"
quotient = a / b
console.log('quotient:', quotient);

console.log('\n===\n');


/**
 * Combine the two strings together called "firstName" and "lastName" in the variable "finalString"
 * finalString should separate your first name and last name with a comma and a space
 * The two variables you define should be your first and last name
 *
 * Example: 'Robin, Funk'
 * @see https://devdocs.io/javascript/template_literals
 */

// Define "firstName" below
let firstName = 'Muhammad'
// Define "lastName" below
let lastName = 'Japanwala'
let finalString = firstName + lastName
console.log('finalString:', finalString);

console.log('\n===\n');


/**
 * Change the "x" and "y" variable before each console.log() to make each print the boolean true
 */

let x = 0;
let y = 0;

console.log('x === y:', x === y);
x = 1;
y = 0;
console.log('x > y', x > y);
x = -1
y = x
console.log('x === -1 && y === x:', x === -1 && y === x);
x = 1;
y = 24;
console.log('x > 0 && y === 24:', x > 0 && y === 24);
y = 23;
console.log('!(y === 24)', !(y === 24));
y = x * 2
console.log('x * 2 === y', x * 2 === y);
