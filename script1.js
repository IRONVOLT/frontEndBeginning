class Person{
    constructor(){
        this.firstName = arguments[0];
        this.lastName = arguments[1];
        this.fullName = this.firstName + ' ' + this.lastName;
    }
}

function namedOne(){
    return new Person(arguments[0], arguments[1]);
}

let firstPerson = namedOne("Anton", "Fedorenko");

let secondPerson = namedOne("Irina", "Esina")

console.log(firstPerson);
console.log(secondPerson);