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