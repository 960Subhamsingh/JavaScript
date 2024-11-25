// Ways to declare a variable
// `var`, `let`, & `const`

// const variable are not change
//  We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: 'Brad',
};
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);

// With let, we can declare a value without assigning a value
var fullName;
fullName = "Subham Kumar";

console.log(fullName);

// how to name variables

// fullName
// full-name
// full_name
// FullName

var courseName = "JAVASCRIPT";

var isLoggedIn = false;

// integer data type
var loggedCount = 34;

// console.log(loggedCount);
// console.log("loggedCount");

var paymentMode;

paymentMode = "Credit Card";
console.log(paymentMode);

// var if = 23;

// multiple String
console.log(20, 'Hello', true);


// console error & warning

console.error("alert");
console.warn("warning");

//  create table a form directly in table method with console.

console.table({name: 'Brand' , email: 'brand@gmail.com'})

// Group console

console.group('simple');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World' , styles);


// This is a single line of code

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/