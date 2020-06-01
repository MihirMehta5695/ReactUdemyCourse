// From Udemy Course

// Normal function 
function myFnc() {
    console.log("HI")
    // ...
}

// OR other way for normal Function
const myFunction = function () {
    console.log("Hello")
    // ...
}

// Arrow Functions, no issues with the 'this' keyword
const myFunc = () => {
    console.log('Good day!')
    // ...
}

function printMyName(name) {
    console.log(name);
}

printMyName('Mihir');

// Arrow function equivalent
const printMyNameArrow = (name) => {
    console.log(name);
}

printMyNameArrow('Mansi');

// Omitting brackets if we have only one args
const nameFunc = name => { console.log(name) }

nameFunc('Bhavesh')

// for less then one args or more than one args, you will require paranthesis to pass args()
const nameFunc0 = () => { console.log("Hola") }
// OR
const nameFunc1 = (fName, lName) => { console.log(fName + " " + lName) }

nameFunc0();
nameFunc1("Mihir", "Mehta");

// If we have only parameter and we are returning somthing from a function like this
const squareNum = number => {
    return number * number;
}

console.log(squareNum(5));

// We can shorten them into a line like this, but remember to 'omit' return keyword
const squareNum1 = num => num * num;

console.log(squareNum1(10));