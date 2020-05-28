var myName = "Mihir";

console.log(myName);

const Person = function (name, age, profession) {
    personName = name;
    const personAge = age;
    let personProfession = age;
    personProfession = profession;
    console.log(name, age, profession);
    console.log(personName, personAge, personProfession);
}

Person("Mihir", 24, "Developer");
console.log(personName);
console.log(personAge);
console.log(personProfession);