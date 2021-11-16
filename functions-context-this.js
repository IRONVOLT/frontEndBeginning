class Person{
    constructor(){
        this.firstName = arguments[0];
        this.lastName = arguments[1];
    }

    get firstNameGetter(){
        return this.firstName;
    }
    get lastNameGetter(){
        return this.lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set firstNameSetter(firstName){
        this.firstName = firstName;
    }

    set lastNameSetter(lastName){
        this.lastName = lastName;
    }
    
    set fullName(newFullName){
        let fullNameSplitArray = newFullName.split(" ");
        if(fullNameSplitArray.length==1){
            return `${this.firstName} ${this.lastName}`;
        }
        this.firstName = fullNameSplitArray[0];
        this.lastName = fullNameSplitArray[1];
        return `${this.firstName} ${this.lastName}`;
    }
}

let firstPerson = new Person("Anton", "Fedorenko");

// Имя, фамилия, полное имя
console.log(firstPerson.firstName);
console.log(firstPerson.lastName);
console.log(firstPerson.fullName);

// Меняем на новое имя фимия по очереди
firstPerson.firstName = "Anna"; 
firstPerson.lastName = "Kotik";

console.log(firstPerson.firstName);
console.log(firstPerson.lastName);
console.log(firstPerson.fullName);

// Меняем сразу полное имя 
firstPerson.fullName = "Igor Petrovich";

console.log(firstPerson.fullName);
console.log(firstPerson.firstName);
console.log(firstPerson.lastName);

// Без пробела имя не меняется
firstPerson.fullName = "UncleBogdan";

console.log(firstPerson.fullName); //Ожидается: Igor Petrovich
