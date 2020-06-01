// the '...' operator is can act either as spread or rest operator.
// Lets check the following example

// Example for spread operator
// Spread operator is used to split up array elements OR object properties
const oldArray = [10, 20, 30, 'Mihir',]
const newArray = [...oldArray, 1, 2];
// The three dots will pull all values/properties from oldArray or oldObject
const oldObject = { name: "Mihir", age: 24 }
const newObject = { ...oldObject, profession: "Developer", newProp: 5 }

console.log(newArray, newObject);


// The same '...' operator can be used as rest operator, looking at the following example
// The rest operator is used to merge a list of fundtion arguments into an array
function sortArgs(...args) {
    return args.sort();
}

// The example from Udemy course is as below:
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
const newNumsWithoutSpreadOperator = [nums, 4, 5]
console.log(newNums); // OP: [1,2,3,4,5]
console.log(newNumsWithoutSpreadOperator); // OP: [[1,2,3],4,5]

const person = {
    name: "Max",
    age: 24
};

const newPerson = {
    ...person,
    age: 28
}

console.log(person); // OP:{ name: 'Max', age: 24 }
console.log(newPerson);//OP:{ name: 'Max', age: 28 }

const newPersonWithoutSpreadOperator = {
    person,
    age: 28
}

console.log(newPersonWithoutSpreadOperator);
//OP: { person: { name: 'Max', age: 24 }, age: 28 }

const filter = (...arguments) => {
    return arguments.filter(el => el === 1);
}
console.log(filter(1, 2, 3, { name: "Person" }))