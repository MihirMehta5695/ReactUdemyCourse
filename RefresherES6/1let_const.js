var myName = "Mihir";

// console.log(myName);
console.log(myNumber); // Example of hoisting
const Person = function (name, age, profession) {
    var personPrint = "Name : " + name + "\nAge : " + age + "\nProfession : " + profession;
    personName = name;
    const personAge = age;
    // Cannot perform the reassign operation on const.
    /* personAge = name */
    let personProfession = age; /* Can be reassigned */
    personProfession = profession;
    // console.log(name, age, profession);
    // console.log(personName, personAge, personProfession);
    console.log(personPrint)
}

Person("Mihir", 24, "Developer");
console.log(personName); // This will be printed
/* console.log(personAge); */ // This wont work because of the variable scoping
/* console.log(personProfession); */ // This also wont work because of the variable scoping
var myNumber = 24;


////////////////////////////
//FROM UDEMY COURSE
////////////////////////////

// let for variable values
// const for constant values

var myName = 'Mihir';
console.log(myName);

myName = 'Mansi';
console.log(myName);

// Similarly using let instead of var

let myName1 = 'Mihir';
console.log(myName1);

myName1 = 'Mansi';
console.log(myName1);

// But using const instead of var, we cannot do the same

const myName2 = 'Mihir';
console.log(myName2);

/* myName1 = 'Mansi'; */ //This is not allowed
console.log(myName1);