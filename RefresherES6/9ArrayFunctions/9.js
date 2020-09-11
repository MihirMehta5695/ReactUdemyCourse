// Refreshing the Array Functions
const numbers = [1, 2, 3];

// Aim is to double all the values of array

const doubleNumArray = numbers.map((num) => {
    return num * 2
});

console.log(doubleNumArray);// OP:[ 2, 4, 6 ]

// simplfied code is 
const doubleNums = numbers.map(num => num * 2);
console.log(doubleNums)// OP:[ 2, 4, 6 ]
console.log(numbers) //OP: [ 1, 2, 3 ]
// map function returns a new array and keeps th original array unchanged, as seen in the above example
