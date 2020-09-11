class Human {
    constructor() {
        this.gender = "Male";
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        // super(); // This is important if you are extending super class and creating a constructor for child class
        // excluding super() in the constructor will lead to an error
        // It should be the first line
        this.name = "Mihir";
    }

    printMyName() {
        console.log(this.name);
    }

}

const per = new Person();
per.printMyName();
per.printGender();