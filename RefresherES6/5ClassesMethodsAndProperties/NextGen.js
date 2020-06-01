// This is ES7 way of writing the code in easier way of 4Classes javascript

class Human {
    gender = 'Male';

    printGender = () => {
        console.log(this.gender);
        // Here 'this' keyword refers to the instance of class itself
    }
}

class Person extends Human {
    name = "Mihir";
    printMyName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printGender();
person.printMyName();