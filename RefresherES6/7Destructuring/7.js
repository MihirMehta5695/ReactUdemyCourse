// Destructuring allows us to easily extract array elements or object properties and store them in variables
// Basically two types of destructuring:
// 1) Array Destructuring and
[a, b] = ['Hello', 'Mihir', "World"]
console.log(a); //OP: Hello
console.log(b); // OP: Mihir


// 2) Object Destructuring -> won't work in node js or chrome
// Similar to array one,
// { name } = { name: "Mihir", age: 24 }
// console.log(name); //OP: Mihir

// Udemy eg
const nums = [1, 2, 3];
[num1, num2] = nums;
console.log(num1, num2); //OP: 1 \n 2
[n1, , n3] = nums;
console.log(n1, n3); //OP: 1 \n 3

