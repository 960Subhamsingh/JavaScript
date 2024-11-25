let x;

const num = new Number(5);

// toString() - returns a string representation of the number
x = num.toString();
// To get the length
x = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);

// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');

// valueOf - Get value
x = num.valueOf();

// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);


const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

// Get the product
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

// Get the quotient
const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);

// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);
