// Primitve type
const number = 1;
const num2 = number;
// Here, num2 will copy the value from number
// Primitives are numbers,strings and booleans
//  All the primitive types will always copy the value when re-assigned instead of copying the reference
console.log(num2)

// On the other side,
// There are objects.
// Whenever you copy one object from another -> basically you are copying its reference instead of value.
const person = {
    name: "Mihir"
};

// person is reference pointer

const secondPerson = person;
// secondPerson is reference pointer to the same object person is pointing

person.name = "Mansi"
// Even though we are changing the value of person object,
// the same changes are reflected in the secondPerson object as seen in the next line
console.log(person); //OP: { name: 'Mansi' }
// Here, the secondPerson has not copied values from Person, but it is pointing to the same reference as of person object.
// This is the same case with arrays, objects which are not primitive types
// Always try to use deepCopy or spread operator

const myObject = {
    color: "Red",
}

const newObject = {
    ...myObject
};

myObject.color = "Blue";
console.log(newObject); //OP: { color: 'Red' }